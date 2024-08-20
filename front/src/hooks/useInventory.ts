import { useState, useEffect } from 'react';
import { StaticImageData } from 'next/image';

export const useInventory = () => {
  const [inventory, setInventory] = useState<{ src: StaticImageData; name: string }[]>([]);
  const [showItems, setShowItems] = useState(false);

  const addItemToInventory = (item: { src: StaticImageData; name: string }) => {
    setInventory((prev) => [...prev, item]);
    if (inventory.length + 1 === 5) {
      setShowItems(false); // 모든 아이템이 담기면 아이템들을 사라지게 함
    }
  };

  return {
    inventory,
    showItems,
    setShowItems,
    addItemToInventory,
  };
};
