'use client';

import CursorDot from '@src/components/BolinhaBody';
import Footer from '@src/components/Footer';
import Loading from '@src/components/Loading';
import { DisplaySize } from '@src/hooks/Display';
import useProfile from '@src/hooks/useProfile';
import { useEffect, useState } from 'react';
import LobbyDesktop from './pages/lobby/desktop/page';
import Lobby from './pages/lobby/mobile/page';
import './scss/layout.scss';

export default function Home() {
  const { profile, error } = useProfile();
  const [showLoading, setShowLoading] = useState(true);
  const { isMobile } = DisplaySize();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoading ? <Loading /> : <CursorDot />}
      {error && <p>{error}</p>}
      {!showLoading && profile && (isMobile ? <Lobby /> : <LobbyDesktop />)}
      <Footer />
    </>
  );
}
