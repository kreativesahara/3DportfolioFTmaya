import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');
  const person = 'Creators';

  useEffect(() => {
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
    }, 1000); 

    return () => clearInterval(intervalId);
  }, []);

  const pad = (n, w = 2) => String(n).padStart(w, '0');

  const HH = pad(time.getHours());
  const MM = pad(time.getMinutes());
  const SS = pad(time.getSeconds());
  const ms = pad(time.getMilliseconds(), 3);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dayName   = days[time.getDay()];
  const dateStr   = `${time.getDate()} ${months[time.getMonth()]} ${time.getFullYear()}`;
  const ampm      = time.getHours() >= 12 ? 'PM' : 'AM';

  return (
    <section className="relative w-full min-h-[60vh] flex justify-center items-center overflow-hidden py-2xl px-md mt-xl" aria-label="Live clock">
      
      {/* Ambient Floating Blobs (Div based instead of ::before/::after) */}
      <div className="absolute top-0 right-[-50px] w-[300px] h-[300px] rounded-full filter blur-[80px] bg-accent-primary opacity-40 animate-blob-float" />
      <div className="absolute bottom-0 left-[-50px] w-[300px] h-[300px] rounded-full filter blur-[80px] bg-accent-secondary opacity-40 animate-blob-float [animation-delay:-5s]" />

      <div className="relative z-10 bg-surface-glass backdrop-blur-[20px] border border-border-color rounded-xl p-2xl w-full max-w-[800px] text-center shadow-lg flex flex-col gap-md">

        {/* Greeting */}
        <p className="font-sans text-base font-medium text-text-secondary uppercase tracking-[0.2rem] mb-xs">
          {greeting}
        </p>

        {/* Date strip */}
        <p className="font-sans text-xl font-bold text-text-primary -mt-2 mb-lg">
          {dayName} · {dateStr}
        </p>

        {/* Main digital display */}
        <div className="flex justify-center items-baseline gap-sm sm:gap-md mb-xl flex-wrap">
          <div className="flex flex-col items-center min-w-[50px] sm:min-w-[80px]">
            <span className="font-mono text-[2.5rem] sm:text-[4rem] font-bold text-text-primary leading-none">{HH}</span>
            <span className="font-mono text-[0.75rem] font-medium text-accent-primary mt-[5px] tracking-[0.1rem]">HRS</span>
          </div>
          
          <span className="font-mono text-2rem sm:text-[3rem] font-light text-border-color leading-none hidden sm:inline">:</span>
          
          <div className="flex flex-col items-center min-w-[50px] sm:min-w-[80px]">
            <span className="font-mono text-[2.5rem] sm:text-[4rem] font-bold text-text-primary leading-none">{MM}</span>
            <span className="font-mono text-[0.75rem] font-medium text-accent-primary mt-[5px] tracking-[0.1rem]">MIN</span>
          </div>
          
          <span className="font-mono text-2rem sm:text-[3rem] font-light text-border-color leading-none hidden sm:inline">:</span>
          
          <div className="flex flex-col items-center min-w-[50px] sm:min-w-[80px]">
            <span className="font-mono text-[2.5rem] sm:text-[4rem] font-bold text-text-primary leading-none">{SS}</span>
            <span className="font-mono text-[0.75rem] font-medium text-accent-primary mt-[5px] tracking-[0.1rem]">SEC</span>
          </div>
          
          <span className="font-mono text-[1.25rem] sm:text-[2rem] font-light text-accent-secondary/50 leading-none hidden sm:inline">·</span>
          
          <div className="flex flex-col items-center min-w-[40px] sm:min-w-[60px] hidden sm:flex">
            <span className="font-mono text-[1.25rem] sm:text-[2rem] font-bold text-text-secondary leading-none">{ms}</span>
            <span className="font-mono text-[0.75rem] font-medium text-accent-primary mt-[5px] tracking-[0.1rem]">MS</span>
          </div>
          
          <div className="font-mono text-[0.75rem] sm:text-[1rem] font-extrabold text-white bg-gradient-brand px-2 py-1 rounded-sm ml-2 self-center">
            {ampm}
          </div>
        </div>

        {/* Accent progress bar — seconds */}
        <div className="w-full h-1 bg-border-color rounded-full overflow-hidden mt-md">
          <div
            className="h-full bg-gradient-brand shadow-[0_0_10px_var(--color-accent-secondary)] transition-[width] duration-[100ms] linear"
            style={{ width: `${(time.getSeconds() / 60) * 100}%` }}
          />
        </div>

      </div>
    </section>
  );
};

export default Clock;