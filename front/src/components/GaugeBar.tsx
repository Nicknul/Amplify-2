import React, { useState, useEffect } from 'react';

type GaugeBarProps = {
  initialValue: number;
};

const GaugeBar: React.FC<GaugeBarProps> = ({ initialValue }) => {
  const [gauge, setGauge] = useState(initialValue);
  const [isDecreasing, setIsDecreasing] = useState(false);

  const decreaseGauge = () => {
    setIsDecreasing(true);
    setGauge((prev) => Math.max(prev - 3, 0));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDecreasing && gauge < 100) {
        setGauge((prev) => Math.min(prev + 1, 100)); // 게이지를 서서히 회복
      }
    }, 50); // * 50ms마다 1씩 증가

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
  }, [isDecreasing, gauge]);

  useEffect(() => {
    if (isDecreasing) {
      const timer = setTimeout(() => {
        setIsDecreasing(false); // * 0.5초 후 자동 복구 상태로 전환
      }, 50);

      return () => clearTimeout(timer); // 이전 타이머 정리
    }
  }, [isDecreasing]);

  return (
    <div>
      <div className="w-full h-6 bg-yellow-300 rounded overflow-hidden">
        <div
          className="h-full bg-red-500 transition-width duration-300 ease-in-out"
          style={{ width: `${gauge}%` }}
        ></div>
      </div>
      <button onClick={decreaseGauge} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Decrease Gauge
      </button>
    </div>
  );
};

export default GaugeBar;
