import React from 'react';
import Image from 'next/image';
import bag from '../public/bag.png';

type InventoryButtonProps = {
  onClick: () => void;
};

const InventoryButton: React.FC<InventoryButtonProps> = ({ onClick }) => {
  return (
    <Image
      src={bag}
      alt="인벤토리"
      onClick={onClick}
      className="absolute top-4 right-4 w-24 h-24 transform transition-transform duration-300 hover:scale-110"
    />
  );
};

export default InventoryButton;
