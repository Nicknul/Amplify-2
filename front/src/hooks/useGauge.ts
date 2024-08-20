import { useState, useEffect } from 'react';

export const useGauge = (initialValue: number) => {
  const [gauge, setGauge] = useState(initialValue);
  const [isDecreasing, setIsDecreasing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // 성공 상태 추가

  const decreaseGauge = () => {
    setIsDecreasing(true);
    setGauge((prev) => {
      const newGauge = Math.max(prev - 3, 0);
      if (newGauge === 0) {
        setIsSuccess(true); // 게이지가 0이 되면 성공 상태로 설정
      }
      return newGauge;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDecreasing && gauge < 100 && !isSuccess) {
        // isSuccess가 true이면 증가 멈춤
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

  return { gauge, decreaseGauge, isSuccess }; // 성공 상태 반환
};
