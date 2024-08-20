import React, { useState, useEffect } from 'react';
import { useGauge } from '../hooks/useGauge';
import Kong from './Kong';
import Gauge from './Gauge';
import ItemsList from './ItemsList';
import InventoryModal from './InventoryModal';
import Image, { StaticImageData } from 'next/image';
import bag from '../public/bag.png';

type GaugeBarProps = {
  initialValue: number;
};

const GaugeBar: React.FC<GaugeBarProps> = ({ initialValue }) => {
  const { gauge, handleClick, isShaking } = useGauge(initialValue);
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [showItems, setShowItems] = useState(false);
  const [inventory, setInventory] = useState<{ src: StaticImageData; name: string }[]>([]);

  useEffect(() => {
    if (gauge === 0) {
      setTimeout(() => {
        setShowItems(true);
      }, 300);
    }
  }, [gauge]);

  const handleItemClick = (item: { src: StaticImageData; name: string }) => {
    setInventory((prev) => [...prev, item]);
    if (inventory.length + 1 === 5) {
      setShowItems(false); // 모든 아이템이 담기면 아이템들을 사라지게 함
    }
  };

  return (
    <div className="relative flex justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="font-bold mb-4">Lv.99 욱재몬</div>
        <Gauge gauge={gauge} />
        {!showItems && inventory.length < 5 && <Kong onClick={handleClick} isShaking={isShaking} />}
        {showItems && <ItemsList onItemClick={handleItemClick} inventory={inventory} />}
      </div>
      <Image
        src={bag}
        alt="인벤토리"
        onClick={() => setIsInventoryOpen(true)}
        className="absolute top-4 right-4 w-24 h-24 transform transition-transform duration-300 hover:scale-110"
      />
      {isInventoryOpen && <InventoryModal items={inventory} onClose={() => setIsInventoryOpen(false)} />}
    </div>
  );
};

export default GaugeBar;
