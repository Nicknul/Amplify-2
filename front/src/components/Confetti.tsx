import React from 'react';

const Confetti: React.FC = () => {
  const confettiColors = ['#FFC700', '#FF0000', '#00C2FF', '#7CFF00', '#FF00A1'];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 5 }}>
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="animate-confetti w-2 h-4 absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)],
            transform: `rotate(${Math.random() * 360}deg)`,
            animationDelay: `${Math.random() * 0.5}s`, // 각 폭죽이 개별적으로 나타나도록 설정
            animationIterationCount: '1', // 애니메이션을 한 번만 실행
          }}
        ></div>
      ))}
    </div>
  );
};

export default Confetti;
