import React from 'react';

type InventoryModalProps = {
  onClose: () => void;
  inventory: string[]; // 인벤토리 아이템 리스트
};

const InventoryModal: React.FC<InventoryModalProps> = ({ onClose, inventory }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96 h-96 relative">
        <h2 className="text-xl font-bold mb-4">인벤토리</h2>
        <ul className="list-disc list-inside">
          {inventory.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
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
