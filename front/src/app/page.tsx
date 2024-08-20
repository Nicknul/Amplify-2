'use client';

import React from 'react';
import GaugeBar from '../components/GaugeBar';

const Home: React.FC = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Gauge Bar Example</h1>
      <GaugeBar initialValue={100} />
    </div>
  );
};

export default Home;
