// src/components/MatrixRain.tsx

import { useEffect, useRef } from 'react';
import styles from './MatrixRain.module.css';

const MatrixRain: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createSymbol = () => {
      const symbol = document.createElement('div');
      symbol.innerText = String.fromCharCode(0x30A0 + Math.random() * 96);
      symbol.className = styles.symbol;
      symbol.style.left = Math.random() * 100 + 'vw';
      symbol.style.animationDuration = 2 + Math.random() * 3 + 's';
      symbol.style.animationDelay = Math.random() * 5 + 's';
      container.appendChild(symbol);

      symbol.addEventListener('animationend', () => {
        symbol.remove();
      });
    };

    const interval = setInterval(createSymbol, 100);
    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className={styles.container}>Enter the Matrix...</div>;
};

export default MatrixRain;
