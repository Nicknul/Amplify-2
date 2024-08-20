import React from 'react';
import { useGauge } from '../hooks/useGauge';
import { useInventory } from '../hooks/useInventory';
import { useGaugeBarEffects } from '../hooks/useGaugeBarEffects';
import { useInventoryToggle } from '../hooks/useInventoryToggle';
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
  const { inventory, showItems, setShowItems, addItemToInventory, resetInventory } = useInventory();
  const { isInventoryOpen, openInventory, closeInventory } = useInventoryToggle();

  useGaugeBarEffects(gauge, setShowItems);

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
        {showItems && (
          <ItemsList
            onItemClick={addItemToInventory}
            inventory={inventory}
            onReset={resetInventory} // 상태 초기화 핸들러 전달
          />
        )}
      </div>
      <InventoryButton onClick={openInventory} />
      {isInventoryOpen && <InventoryModal items={inventory} onClose={closeInventory} />}
    </div>
  );
};

export default GaugeBar;
