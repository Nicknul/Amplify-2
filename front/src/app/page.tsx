'use client';

import React from 'react';
import GaugeBar from '../components/GaugeBar';
import { page, title } from '../styles/styles';

const Home: React.FC = () => {
  return (
    <div className={page}>
      <h1 className={title}>Gauge Bar Example</h1>
      <GaugeBar initialValue={100} />
    </div>
  );
};

export default Home;
