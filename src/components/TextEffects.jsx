import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 1. Typewriter with Underscore Cursor for the Brand Name
export const TypewriterCursor = ({ text, delay = 0, speed = 100, loopDelay = 6000, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  // Initial delay before typing starts
  useEffect(() => {
    const startTimeout = setTimeout(() => setStartTyping(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  // Typing logic with Loop
  useEffect(() => {
    if (startTyping) {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        // Complete! Wait for loopDelay, then erase and restart.
        const resetTimeout = setTimeout(() => {
          setDisplayedText('');
          setCurrentIndex(0);
        }, loopDelay);
        return () => clearTimeout(resetTimeout);
      }
    }
  }, [currentIndex, startTyping, text, speed, loopDelay]);

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
        className="inline-block font-mono text-accent-primary ml-1"
      >
        _
      </motion.span>
    </span>
  );
};

// 2. Laser Effect Typewriter for the Tagline
export const LaserTypewriter = ({ text, delay = 0, speed = 0.05, loopDelay = 6000, className = '' }) => {
  const words = text.split(' ');
  const [iteration, setIteration] = useState(0);

  // To restart Framer Motion stagger animations cleanly, we update a key.
  // The total time of a cycle is: initial delay + (number of chars * stagger speed) + loop delay wait
  useEffect(() => {
    const totalCycleTime = delay + (text.replace(/\s+/g, '').length * speed * 1000) + loopDelay;
    
    // We start the cycle repetition immediately, triggering a remount based on iteration key
    const interval = setInterval(() => {
      setIteration(prev => prev + 1);
    }, totalCycleTime);

    return () => clearInterval(interval);
  }, [delay, speed, text, loopDelay]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: speed, delayChildren: delay / 1000 },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      filter: 'blur(8px) brightness(2)',
      textShadow: '0 0 20px #00d4ff, 0 0 40px #6c63ff, 0 0 60px #ffffff',
      y: 5
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px) brightness(1)',
      textShadow: '0 0 0px #00d4ff, 0 0 0px #6c63ff, 0 0 0px #ffffff',
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <span className={className}> 
      <motion.span
        key={iteration} // Changing key forces Framer Motion to unmount/remount and re-run sequence
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
            {Array.from(word).map((char, charIndex) => (
              <motion.span key={charIndex} variants={child} className="inline-block">
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </span>
  );
};
