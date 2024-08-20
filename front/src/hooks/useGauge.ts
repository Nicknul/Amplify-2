import { useState, useEffect } from 'react';

export const useGauge = (initialValue: number) => {
  const [gauge, setGauge] = useState(initialValue);
  const [isDecreasing, setIsDecreasing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isShaking, setIsShaking] = useState(false); // 애니메이션 상태 추가

  const decreaseGauge = () => {
    setIsDecreasing(true);
    setGauge((prev) => {
      const newGauge = Math.max(prev - 3, 0);
      if (newGauge === 0) {
        setIsSuccess(true);
      }
      return newGauge;
    });
  };

  const handleClick = () => {
    setIsShaking(true);
    decreaseGauge();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDecreasing && gauge < 100 && !isSuccess) {
        setGauge((prev) => Math.min(prev + 1, 100));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isDecreasing, gauge, isSuccess]);

  useEffect(() => {
    if (isDecreasing) {
      const timer = setTimeout(() => {
        setIsDecreasing(false);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [isDecreasing]);

  useEffect(() => {
    if (isShaking) {
      const timer = setTimeout(() => {
        setIsShaking(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isShaking]);

  return { gauge, handleClick, isSuccess, isShaking }; // 필요한 상태와 함수를 반환
};
