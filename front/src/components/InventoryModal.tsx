import React from 'react';

type InventoryModalProps = {
  onClose: () => void;
};

const InventoryModal: React.FC<InventoryModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96 h-96 relative">
        <h2 className="text-xl font-bold mb-4">인벤토리</h2>
        {/* 인벤토리 항목들을 여기에 추가하면 됩니다. */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default InventoryModal;
