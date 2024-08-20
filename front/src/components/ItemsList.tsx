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
  onReset: () => void; // 추가된 리셋 핸들러
};

const ItemsList: React.FC<ItemsListProps> = ({ onItemClick, inventory, onReset }) => {
  const items = [
    { src: chick, name: '병아리' },
    { src: nest, name: '둥지' },
    { src: ribbon, name: '리본' },
    { src: sunglasses1, name: '선글라스1' },
    { src: sunglasses2, name: '선글라스2' },
  ];

  // 인벤토리에 추가된 아이템은 필터링해서 제외
  const filteredItems = items.filter((item) => !inventory.some((invItem) => invItem.name === item.name));

  const handleRestart = () => {
    onReset(); // 상태 초기화
    window.location.reload(); // 페이지 새로고침
  };

  return (
    <div className="flex flex-col items-center">
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
      <button onClick={handleRestart} className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        다시하기
      </button>
    </div>
  );
};

export default ItemsList;
