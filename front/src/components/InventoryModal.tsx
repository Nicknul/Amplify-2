import { StaticImageData } from 'next/image';
import React from 'react';

type InventoryModalProps = {
  items: { src: StaticImageData; name: string }[];
  onClose: () => void;
};

const InventoryModal: React.FC<InventoryModalProps> = ({ items, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96 h-auto relative">
        <h2 className="text-xl font-bold mb-4">인벤토리</h2>
        <div className="grid grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={item.src.src} alt={item.name} className="w-16 h-16" />
              <span className="mt-2">{item.name}</span>
            </div>
          ))}
        </div>
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
