import React, { useEffect, useState } from 'react';
import { useGauge } from '../hooks/useGauge';
import { useInventory } from '../hooks/useInventory';
import Kong from './Kong';
import Gauge from './Gauge';
import ItemsList from './ItemsList';
import InventoryModal from './InventoryModal';
import InventoryButton from './InventoryButton';
import LevelDisplay from './LevelDisplay';

type GaugeBarProps = {
  initialValue: number;
};

const GaugeBar: React.FC<GaugeBarProps> = ({ initialValue }) => {
  const { gauge, handleClick, isShaking } = useGauge(initialValue);
  const { inventory, showItems, setShowItems, addItemToInventory } = useInventory();
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);

  useEffect(() => {
    if (gauge === 0) {
      setTimeout(() => {
        setShowItems(true);
      }, 300);
    }
  }, [gauge, setShowItems]);

  return (
    <div className="relative flex justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center">
        {!showItems && (
          <>
            <LevelDisplay />
            <Gauge gauge={gauge} />
            <Kong onClick={handleClick} isShaking={isShaking} />
          </>
        )}
        {showItems && <ItemsList onItemClick={addItemToInventory} inventory={inventory} />}
      </div>
      <InventoryButton onClick={() => setIsInventoryOpen(true)} />
      {isInventoryOpen && <InventoryModal items={inventory} onClose={() => setIsInventoryOpen(false)} />}
    </div>
  );
};

export default GaugeBar;
