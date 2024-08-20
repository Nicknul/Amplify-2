import React, { useState, useEffect } from 'react';
import { useGauge } from '../hooks/useGauge';
import Image from 'next/image';
import kongImage from '../public/kong.png';
import bag from '../public/bag.png';
import InventoryModal from './InventoryModal';
import chick from '../public/chick.png';
import nest from '../public/nest.png';
import ribbon from '../public/ribbon.png';
import sunglasses1 from '../public/sunglasses-1.png';
import sunglasses2 from '../public/sunglasses-2.png';

type GaugeBarProps = {
  initialValue: number;
};

const GaugeBar: React.FC<GaugeBarProps> = ({ initialValue }) => {
  const { gauge, handleClick, isSuccess, isShaking } = useGauge(initialValue);
  const [isInventoryOpen, setIsInventoryOpen] = useState(false); // 인벤토리 상태 관리
  const [showItems, setShowItems] = useState(false); // 아이템 표시 상태 관리

  const handleCloseModal = () => {
    window.location.reload();
  };

  // 게이지가 0이 되면 아이템을 표시
  useEffect(() => {
    if (gauge === 0) {
      setTimeout(() => {
        setShowItems(true); // 일정 시간 후 아이템들을 표시
      }, 300); // 약간의 딜레이 후 아이템들이 나타나도록 설정
    }
  }, [gauge]);

  return (
    <div className="relative flex justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="font-bold mb-4">Lv.99 욱재몬</div>
        <div className="mb-4 w-96 h-10 bg-yellow-300 rounded overflow-hidden shadow shadow-black/30">
          <div
            className="h-full bg-red-500 transition-width duration-300 ease-in-out shadow-inner shadow-black/20"
            style={{ width: `${gauge}%` }}
          ></div>
        </div>

        {!showItems && ( // 게이지가 0이 되기 전까지만 욱재몬 이미지 표시
          <Image
            src={kongImage}
            alt="욱재몬"
            onClick={handleClick}
            className={`cursor-pointer ${isShaking ? 'animate-shake' : ''}`}
          />
        )}

        {showItems && ( // 게이지가 0이 되면 아이템들이 나타남
          <div className="flex space-x-4 mt-4 animate-bounce">
            <Image src={chick} alt="아이템" className="w-16 h-16" />
            <Image src={nest} alt="아이템" className="w-16 h-16" />
            <Image src={ribbon} alt="아이템" className="w-16 h-16" />
            <Image src={sunglasses1} alt="아이템" className="w-16 h-16" />
            <Image src={sunglasses2} alt="아이템" className="w-16 h-16" />
          </div>
        )}
      </div>
      <Image
        src={bag}
        alt="인벤토리"
        onClick={() => setIsInventoryOpen(true)} // 인벤토리 열기
        className="absolute top-4 right-4 w-24 h-24 transform transition-transform duration-300 hover:scale-110"
      />
      {/* 인벤토리 모달은 필요 시 사용할 수 있도록 유지 */}
      {isInventoryOpen && <InventoryModal onClose={() => setIsInventoryOpen(false)} />}
    </div>
  );
};

export default GaugeBar;
