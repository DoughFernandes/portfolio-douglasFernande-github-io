'use client';

import Footer from '@src/components/Footer';
import Loading from '@src/components/Loading';
import { DisplaySize } from '@src/hooks/Display';
import { useLoadingState } from '@src/hooks/loading';
import useProfile from '@src/hooks/useProfile';
import LobbyDesktop from './pages/lobby/desktop/page';
import Lobby from './pages/lobby/mobile/page';
import CursorDot from '@src/components/BolinhaBody'; // Verifique se o caminho está correto
import './scss/layout.scss';

export default function Home() {
  const { profile, error, loading } = useProfile();
  const showLoading = useLoadingState(loading);
  const { isMobile } = DisplaySize();

  return (
    <>
      <CursorDot /> {/* A bolinha será adicionada aqui */}
      {(loading || showLoading) && <Loading />}
      {error && <p>{error}</p>}
      {!showLoading && profile && (isMobile ? <Lobby /> : <LobbyDesktop />)}
      <Footer />
    </>
  );
}
