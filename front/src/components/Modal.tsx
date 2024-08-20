import React, { useState, useEffect } from 'react';
import Confetti from './Confetti';

type ModalProps = {
  message: string;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false); // 일정 시간이 지나면 폭죽 애니메이션을 종료
    }, 3000); // 3초 동안 폭죽 애니메이션 실행

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리
  }, []);

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      {/* {showConfetti && <Confetti />} 처음 모달이 나타날 때만 폭죽 표시 */}
      <div
        className="w-72 h-64 backdrop-blur-xl bg-white/30 p-5 rounded-xl shadow-lg text-center relative flex flex-col items-center justify-evenly"
        style={{ zIndex: 10 }}
      >
        <h2 className="text-xl font-bold">효과는 굉장했다!</h2>
        <p>{message}</p>
        <button onClick={handleClose} className="w-16 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          닫기
        </button>
      </div>
    </div>
  );
};

export default Modal;
