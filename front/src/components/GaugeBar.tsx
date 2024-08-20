import React, { useState } from 'react';
import { gaugeBg, gaugeFill, btn } from '../styles/styles';

type GaugeBarProps = {
  initialValue: number;
};

const GaugeBar: React.FC<GaugeBarProps> = ({ initialValue }) => {
  const [gauge, setGauge] = useState(initialValue);

  const decreaseGauge = () => {
    setGauge((prev) => Math.max(prev - 3, 0));
  };

  return (
    <div>
      <div className={gaugeBg}>
        <div className={gaugeFill} style={{ width: `${gauge}%` }}></div>
      </div>
      <button onClick={decreaseGauge} className={btn}>
        Decrease Gauge
      </button>
    </div>
  );
};

export default GaugeBar;
