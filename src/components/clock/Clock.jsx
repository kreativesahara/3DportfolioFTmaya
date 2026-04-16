import './clock.css';
import '../../output.css';
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');
  const person = 'Gamers';

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setTime(now);

      const hours = now.getHours();
      if (hours < 12) {
        setGreeting(`Good Morning ${person}!`);
      } else if (hours < 18) {
        setGreeting(`Good Afternoon ${person}!`);
      } else {
        setGreeting(`Good Evening ${person}!`);
      }
    }, 10); // Update every 10 milliseconds for better performance

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  const milliseconds = time.getMilliseconds().toString().padStart(3, '0');
  const microseconds = Math.floor(time.getTime() % 1000).toString().padStart(3, '0');
  return (
    <section className="clock-section">
      <div className="clock">
        <div className="greeting text-3xl">{greeting}</div>
        <div className="container">
          <h2>{hours}</h2>
          <h2>:</h2>
          <h2>{minutes}</h2>
          <h2>:</h2>
          <h2>{seconds}</h2>
          <h2>:</h2>
          <h2>{milliseconds}</h2>
          <h2>:</h2>
          <h2>{microseconds}</h2>
        </div>
      </div>
    </section>
  );
};

export default Clock;