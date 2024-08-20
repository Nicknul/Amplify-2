import React from 'react';

type GaugeProps = {
  gauge: number;
};

const Gauge: React.FC<GaugeProps> = ({ gauge }) => {
  return (
    <div className="mb-4 w-96 h-10 bg-yellow-300 rounded overflow-hidden shadow shadow-black/30">
      <div
        className="h-full bg-red-500 transition-width duration-300 ease-in-out shadow-inner shadow-black/20"
        style={{ width: `${gauge}%` }}
      ></div>
    </div>
  );
};

export default Gauge;
