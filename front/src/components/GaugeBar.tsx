import React from 'react';
import { useGauge } from '../hooks/useGauge';

type GaugeBarProps = {
  initialValue: number;
};

const GaugeBar: React.FC<GaugeBarProps> = ({ initialValue }) => {
  const { gauge, decreaseGauge } = useGauge(initialValue);

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
