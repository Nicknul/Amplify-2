import React from 'react';

type ModalProps = {
  message: string;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded shadow-lg text-center text-black">
        <h2 className="text-xl font-bold mb-4">성공!</h2>
        <p>{message}</p>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          다시하기
        </button>
      </div>
    </div>
  );
};

export default Modal;
