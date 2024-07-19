import { useState, useEffect } from 'react';

export function useLoadingState(loading: boolean, delay: number = 5000): boolean {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [loading, delay]);

  return showLoading;
}
