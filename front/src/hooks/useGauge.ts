import { useState, useEffect } from 'react';

export const useGauge = (initialValue: number) => {
  const [gauge, setGauge] = useState(initialValue);
  const [isDecreasing, setIsDecreasing] = useState(false);

  const decreaseGauge = () => {
    setIsDecreasing(true);
    setGauge((prev) => Math.max(prev - 3, 0));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDecreasing && gauge < 100) {
        setGauge((prev) => Math.min(prev + 1, 100));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isDecreasing, gauge]);

  useEffect(() => {
    if (isDecreasing) {
      const timer = setTimeout(() => {
        setIsDecreasing(false);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [isDecreasing]);

  return { gauge, decreaseGauge };
};
