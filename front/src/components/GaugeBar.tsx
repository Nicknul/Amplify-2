import React, { useState, useEffect } from 'react';
import { useGauge } from '../hooks/useGauge';
import Kong from './Kong';
import Gauge from './Gauge';
import ItemsList from './ItemsList';
import Image from 'next/image';
import bag from '../public/bag.png';
import InventoryModal from './InventoryModal';

type GaugeBarProps = {
  initialValue: number;
};

const GaugeBar: React.FC<GaugeBarProps> = ({ initialValue }) => {
  const { gauge, handleClick, isShaking } = useGauge(initialValue);
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    if (gauge === 0) {
      setTimeout(() => {
        setShowItems(true);
      }, 300);
    }
  }, [gauge]);

  return (
    <div className="relative flex justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="font-bold mb-4">Lv.99 욱재몬</div>
        <Gauge gauge={gauge} />
        {!showItems && <Kong onClick={handleClick} isShaking={isShaking} />}
        {showItems && <ItemsList />}
      </div>
      <Image
        src={bag}
        alt="인벤토리"
        onClick={() => setIsInventoryOpen(true)}
        className="absolute top-4 right-4 w-24 h-24 transform transition-transform duration-300 hover:scale-110"
      />
      {isInventoryOpen && <InventoryModal onClose={() => setIsInventoryOpen(false)} />}
    </div>
  );
};

export default GaugeBar;
