import React, { useState } from 'react';
import { useGauge } from '../hooks/useGauge';
import Modal from './Modal';
import InventoryModal from './InventoryModal';
import Image from 'next/image';
import kongImage from '../public/kong.png';
import bag from '../public/bag.png';

type GaugeBarProps = {
  initialValue: number;
};

const GaugeBar: React.FC<GaugeBarProps> = ({ initialValue }) => {
  const { gauge, handleClick, isSuccess, isShaking } = useGauge(initialValue);
  const [isInventoryOpen, setIsInventoryOpen] = useState(false); // 인벤토리 상태 관리

  const handleCloseModal = () => {
    window.location.reload();
  };

  const handleBagClick = () => {
    setIsInventoryOpen(true); // 인벤토리 모달 열기
  };

  const handleCloseInventory = () => {
    setIsInventoryOpen(false); // 인벤토리 모달 닫기
  };

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
        <Image
          src={kongImage}
          alt="욱재몬"
          onClick={handleClick}
          className={`cursor-pointer ${isShaking ? 'animate-shake' : ''}`}
        />
      </div>
      <Image
        src={bag}
        alt="인벤토리"
        onClick={handleBagClick} // 인벤토리 열기
        className="absolute top-4 right-4 w-24 h-24 transform transition-transform duration-300 hover:scale-110"
      />
      {isSuccess && <Modal message="욱재몬이 쓰러졌다!" onClose={handleCloseModal} />}
      {isInventoryOpen && <InventoryModal onClose={handleCloseInventory} />} {/* 인벤토리 모달 표시 */}
    </div>
  );
};

export default GaugeBar;
