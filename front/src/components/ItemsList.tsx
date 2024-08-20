import React from 'react';
import Image from 'next/image';
import chick from '../public/chick.png';
import nest from '../public/nest.png';
import ribbon from '../public/ribbon.png';
import sunglasses1 from '../public/sunglasses-1.png';
import sunglasses2 from '../public/sunglasses-2.png';

type ItemsListProps = {
  onItemClicked: (itemName: string) => void;
};

const ItemsList: React.FC<ItemsListProps> = ({ onItemClicked }) => {
  return (
    <div className="flex space-x-4 mt-4 animate-bounce">
      <Image src={chick} alt="아이템" className="w-16 h-16 cursor-pointer" onClick={() => onItemClicked('chick')} />
      <Image src={nest} alt="아이템" className="w-16 h-16 cursor-pointer" onClick={() => onItemClicked('nest')} />
      <Image src={ribbon} alt="아이템" className="w-16 h-16 cursor-pointer" onClick={() => onItemClicked('ribbon')} />
      <Image
        src={sunglasses1}
        alt="아이템"
        className="w-16 h-16 cursor-pointer"
        onClick={() => onItemClicked('sunglasses-1')}
      />
      <Image
        src={sunglasses2}
        alt="아이템"
        className="w-16 h-16 cursor-pointer"
        onClick={() => onItemClicked('sunglasses-2')}
      />
    </div>
  );
};

export default ItemsList;
