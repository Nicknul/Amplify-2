import { useState } from 'react';
import { StaticImageData } from 'next/image';

export const useInventory = () => {
  const [inventory, setInventory] = useState<{ src: StaticImageData; name: string }[]>([]);
  const [showItems, setShowItems] = useState(false);

  const addItemToInventory = (item: { src: StaticImageData; name: string }) => {
    setInventory((prev) => [...prev, item]);
  };

  const resetInventory = () => {
    setInventory([]);
    setShowItems(false); // 초기화 시 showItems를 false로 설정
  };

  return {
    inventory,
    showItems,
    setShowItems,
    addItemToInventory,
    resetInventory, // 추가된 함수
  };
};
