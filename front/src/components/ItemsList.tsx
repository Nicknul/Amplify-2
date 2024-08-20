import React from 'react';
import Image from 'next/image';
import chick from '../public/chick.png';
import nest from '../public/nest.png';
import ribbon from '../public/ribbon.png';
import sunglasses1 from '../public/sunglasses-1.png';
import sunglasses2 from '../public/sunglasses-2.png';

const ItemsList: React.FC = () => {
  return (
    <div className="flex space-x-4 mt-4 animate-bounce">
      <Image src={chick} alt="병아리" className="w-16 h-16" />
      <Image src={nest} alt="둥지" className="w-16 h-16" />
      <Image src={ribbon} alt="리본" className="w-16 h-16" />
      <Image src={sunglasses1} alt="외계인 선글라스" className="w-16 h-16" />
      <Image src={sunglasses2} alt="선글라스" className="w-16 h-16" />
    </div>
  );
};

export default ItemsList;
