import { useEffect, useRef, useState } from 'react';
import './Preloader.css';

const LOADING_DURATION = 2800;
const EXIT_DURATION = 620;

const easeOutCubic = (value) => 1 - (1 - value) ** 3;
const easeInOutCubic = (value) =>
  value < 0.5 ? 4 * value ** 3 : 1 - (-2 * value + 2) ** 3 / 2;

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const completionTimer = useRef(null);
  const frameRef = useRef(null);
  const hasCompleted = useRef(false);

  useEffect(() => {
    const startedAt = performance.now();

    const updateProgress = (now) => {
      const elapsed = now - startedAt;
      const ratio = Math.min(elapsed / LOADING_DURATION, 1);
      let nextProgress;

      if (ratio < 0.62) {
        nextProgress = easeOutCubic(ratio / 0.62) * 72;
      } else if (ratio < 0.8) {
        nextProgress = 72 + easeInOutCubic((ratio - 0.62) / 0.18) * 10;
      } else {
        nextProgress = 82 + easeOutCubic((ratio - 0.8) / 0.2) * 18;
      }

      setProgress(Math.min(Math.round(nextProgress), 100));

      if (ratio < 1) {
        frameRef.current = requestAnimationFrame(updateProgress);
        return;
      }

      setProgress(100);
      setIsExiting(true);
      completionTimer.current = window.setTimeout(() => {
        if (!hasCompleted.current) {
          hasCompleted.current = true;
          onComplete?.();
        }
      }, EXIT_DURATION);
    };

    frameRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (completionTimer.current) window.clearTimeout(completionTimer.current);
    };
  }, [onComplete]);

  return (
    <div
      className={`preloader ${isExiting ? 'preloader--exiting' : ''}`}
      role="status"
      aria-label="Loading portfolio"
      aria-live="polite"
    >
      <div className="preloader__content">
        <div className="preloader__brand-mark" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p className="preloader__eyebrow">Loading portfolio</p>
        <p className="preloader__percentage">{progress}%</p>
        <div className="preloader__track" aria-hidden="true">
          <span
            className="preloader__bar"
            style={{ width: `${progress}%` }}
          ></span>
        </div>
        <p className="preloader__status">
          {progress < 100 ? 'Preparing the workspace' : 'Ready to explore'}
        </p>
      </div>
    </div>
  );
}
