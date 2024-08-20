import React from 'react';
import Image, { StaticImageData } from 'next/image';
import chick from '../public/chick.png';
import nest from '../public/nest.png';
import ribbon from '../public/ribbon.png';
import sunglasses1 from '../public/sunglasses-1.png';
import sunglasses2 from '../public/sunglasses-2.png';

type ItemsListProps = {
  onItemClick: (item: { src: StaticImageData; name: string }) => void;
  inventory: { src: StaticImageData; name: string }[];
};

const ItemsList: React.FC<ItemsListProps> = ({ onItemClick, inventory }) => {
  const items = [
    { src: chick, name: '병아리' },
    { src: nest, name: '둥지' },
    { src: ribbon, name: '리본' },
    { src: sunglasses1, name: '외계인 안경' },
    { src: sunglasses2, name: '선글라스' },
  ];

  // 인벤토리에 추가된 아이템은 필터링해서 제외
  const filteredItems = items.filter((item) => !inventory.some((invItem) => invItem.name === item.name));

  return (
    <div className="flex space-x-4 mt-4 animate-bounce">
      {filteredItems.map((item, index) => (
        <Image
          key={index}
          src={item.src}
          alt={item.name}
          className="w-16 h-16 cursor-pointer"
          onClick={() => onItemClick(item)}
        />
      ))}
    </div>
  );
};

export default ItemsList;
