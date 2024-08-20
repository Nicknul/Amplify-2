import React from 'react';
import Image, { StaticImageData } from 'next/image';
import chick from '../public/chick.png';
import nest from '../public/nest.png';
import ribbon from '../public/ribbon.png';
import sunglasses1 from '../public/sunglasses-1.png';
import sunglasses2 from '../public/sunglasses-2.png';

type ItemsListProps = {
  visibleItems: string[];
  onItemClicked: (itemName: string) => void;
};

const ItemsList: React.FC<ItemsListProps> = ({ visibleItems, onItemClicked }) => {
  // 각 아이템의 이미지 경로를 StaticImageData 타입으로 정의
  const itemsMap: Record<string, StaticImageData> = {
    chick,
    nest,
    ribbon,
    'sunglasses-1': sunglasses1,
    'sunglasses-2': sunglasses2,
  };

  return (
    <div className="flex space-x-4 mt-4 animate-bounce">
      {visibleItems.map((itemName) => (
        <Image
          key={itemName}
          src={itemsMap[itemName]}
          alt="아이템"
          className="w-16 h-16 cursor-pointer"
          onClick={() => onItemClicked(itemName)}
        />
      ))}
    </div>
  );
};

export default ItemsList;
