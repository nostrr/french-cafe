import React, { useEffect, useState } from 'react';
import { NavBar } from '../../NavBar/NavBar';

export const MainMenu = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Очистка прослушивателя события при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`searchMenu ${sticky ? 'sticky' : ''}`}>
      <NavBar />
    </header>
  );
};