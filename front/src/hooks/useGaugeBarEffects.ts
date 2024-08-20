import { useEffect } from 'react';

export const useGaugeBarEffects = (gauge: number, setShowItems: (show: boolean) => void) => {
  useEffect(() => {
    if (gauge === 0) {
      setTimeout(() => {
        setShowItems(true);
      }, 300);
    }
  }, [gauge, setShowItems]);
};
