import React from 'react';
import { useGauge } from '../hooks/useGauge';
import Modal from './Modal';
import Image from 'next/image';
import kongImage from '../public/kong.png'; // 이미지 파일을 import

type GaugeBarProps = {
  initialValue: number;
};

const GaugeBar: React.FC<GaugeBarProps> = ({ initialValue }) => {
  const { gauge, decreaseGauge, isSuccess } = useGauge(initialValue);

  const handleCloseModal = () => {
    window.location.reload(); // 간단히 페이지를 새로고침하여 모달을 닫음
  };

  return (
    <div>
      <div className="w-full h-6 bg-yellow-300 rounded overflow-hidden">
        <div
          className="h-full bg-red-500 transition-width duration-300 ease-in-out"
          style={{ width: `${gauge}%` }}
        ></div>
      </div>
      <div className="mt-2 flex justify-center">
        <Image
          src={kongImage}
          alt="Kong"
          onClick={decreaseGauge}
          className="cursor-pointer transform hover:animate-shake" // 크기와 떨림 애니메이션 추가
        />
      </div>

      {isSuccess && <Modal message="The gauge is fully depleted." onClose={handleCloseModal} />}
    </div>
  );
};

export default GaugeBar;
