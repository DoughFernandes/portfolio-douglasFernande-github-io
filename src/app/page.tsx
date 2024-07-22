'use client';

import { Header } from '@components/Header/index';
import { DisplaySize } from '@hooks/Display';
import Footer from '@src/components/Footer';
import Loading from '@src/components/Loading';
import { MobileNav } from '@src/components/Mobile/Nav';
import { useLoadingState } from '@src/hooks/loading';
import useProfile from '@src/hooks/useProfile';
import Lobby from './pages/lobby';
import LobbyMobile from './pages/lobby/mobile';
import './scss/layout.scss';

export default function Home() {
  const { isMobile } = DisplaySize();

  const { data, error, loading } = useProfile();
  const showLoading = useLoadingState(loading);
  return (
    <body>
      <Header />
      {(loading || showLoading) && <Loading />}
      {error && <p>{error}</p>}
      {!showLoading && data && (
        <>
          {isMobile ? <LobbyMobile /> : <Lobby />}
          {isMobile ? <MobileNav /> : null}
        </>
      )}
      <Footer />
    </body>
  );
}
