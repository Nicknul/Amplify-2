import { useState } from 'react';

export const useInventoryToggle = () => {
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);

  const openInventory = () => setIsInventoryOpen(true);
  const closeInventory = () => setIsInventoryOpen(false);

  return { isInventoryOpen, openInventory, closeInventory };
};
