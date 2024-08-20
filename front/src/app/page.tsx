'use client';

import React from 'react';
import GaugeBar from '../components/GaugeBar';

const Home: React.FC = () => {
  return (
    <div className="p-5">
      <GaugeBar initialValue={100} />
    </div>
  );
};

export default Home;
