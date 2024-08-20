import React from 'react';
import { useGauge } from '../hooks/useGauge';
import Modal from './Modal';
import Image from 'next/image';
import kongImage from '../public/kong.png'; // 이미지 파일을 import

type GaugeBarProps = {
  initialValue: number;
};

const GaugeBar: React.FC<GaugeBarProps> = ({ initialValue }) => {
  const { gauge, handleClick, isSuccess, isShaking } = useGauge(initialValue);

  const handleCloseModal = () => {
    window.location.reload(); // 간단히 페이지를 새로고침하여 모달을 닫음
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="font-bold mb-4">Lv.99 욱재몬</div>
      <div className="mb-4 w-96 h-10 bg-yellow-300 rounded overflow-hidden">
        <div
          className="h-full bg-red-500 transition-width duration-300 ease-in-out"
          style={{ width: `${gauge}%` }}
        ></div>
      </div>
      <div>
        <Image
          src={kongImage}
          alt="Kong"
          onClick={handleClick} // 클릭 시 애니메이션 및 게이지 감소 실행
          className={`cursor-pointer ${isShaking ? 'animate-shake' : ''}`} // 클릭 시에만 애니메이션 적용
        />
      </div>

      {isSuccess && <Modal message="The gauge is fully depleted." onClose={handleCloseModal} />}
    </div>
  );
};

export default GaugeBar;
