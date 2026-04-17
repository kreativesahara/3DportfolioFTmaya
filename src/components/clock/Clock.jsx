import './clock.css';
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');
  const person = 'Creators';

  useEffect(() => {
    // Set greeting immediately on mount
    const computeGreeting = (now) => {
      const h = now.getHours();
      if (h < 12) return `Good Morning, ${person}`;
      if (h < 18) return `Good Afternoon, ${person}`;
      return `Good Evening, ${person}`;
    };

    setGreeting(computeGreeting(new Date()));

    const intervalId = setInterval(() => {
      const now = new Date();
      setTime(now);
      setGreeting(computeGreeting(now));
    }, 1000); // 1s is enough — ms display looks fine

    return () => clearInterval(intervalId);
  }, []);

  const pad = (n, w = 2) => String(n).padStart(w, '0');

  const HH = pad(time.getHours());
  const MM = pad(time.getMinutes());
  const SS = pad(time.getSeconds());
  const ms = pad(time.getMilliseconds(), 3);

  // Day / date metadata
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dayName   = days[time.getDay()];
  const dateStr   = `${time.getDate()} ${months[time.getMonth()]} ${time.getFullYear()}`;
  const ampm      = time.getHours() >= 12 ? 'PM' : 'AM';

  return (
    <section className="clock-section" aria-label="Live clock">
      {/* Ambient blobs rendered via CSS ::before / ::after */}
      <div className="clock-card">

        {/* Greeting */}
        <p className="clock-greeting">{greeting}</p>

        {/* Date strip */}
        <p className="clock-date">{dayName} · {dateStr}</p>

        {/* Main digital display */}
        <div className="clock-display">
          <div className="clock-unit">
            <span className="clock-digit">{HH}</span>
            <span className="clock-label">HRS</span>
          </div>
          <span className="clock-sep">:</span>
          <div className="clock-unit">
            <span className="clock-digit">{MM}</span>
            <span className="clock-label">MIN</span>
          </div>
          <span className="clock-sep">:</span>
          <div className="clock-unit">
            <span className="clock-digit">{SS}</span>
            <span className="clock-label">SEC</span>
          </div>
          <span className="clock-sep clock-sep--thin">·</span>
          <div className="clock-unit clock-unit--ms">
            <span className="clock-digit clock-digit--ms">{ms}</span>
            <span className="clock-label">MS</span>
          </div>
          <div className="clock-ampm">{ampm}</div>
        </div>

        {/* Accent progress bar — seconds */}
        <div className="clock-progress-track">
          <div
            className="clock-progress-fill"
            style={{ width: `${(time.getSeconds() / 60) * 100}%` }}
          />
        </div>

      </div>
    </section>
  );
};

export default Clock;