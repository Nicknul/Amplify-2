import React from 'react';
import Image from 'next/image';
import kongImage from '../public/kong.png';

type KongProps = {
  onClick: () => void;
  isShaking: boolean;
};

const Kong: React.FC<KongProps> = ({ onClick, isShaking }) => {
  return (
    <Image
      src={kongImage}
      alt="욱재몬"
      onClick={onClick}
      className={`cursor-pointer ${isShaking ? 'animate-shake' : ''}`}
    />
  );
};

export default Kong;
