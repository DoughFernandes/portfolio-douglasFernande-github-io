'use client';

import Footer from '@src/components/Footer';
import Loading from '@src/components/Loading';
import { DisplaySize } from '@src/hooks/Display';
import { useLoadingState } from '@src/hooks/loading';
import useProfile from '@src/hooks/useProfile';
import ExperiencesDesktop from './desktop';
import ExperiencesMobile from './mobile';

export default function Home() {
  const { profile, error, loading } =
    useProfile();
  const showLoading = useLoadingState(loading);
  const { isMobile } = DisplaySize();

  return (
    <>
      {(loading || showLoading) && <Loading />}
      {error && <p>{error}</p>}
      {!showLoading &&
        profile &&
        (isMobile ? (
          <ExperiencesMobile />
        ) : (
          <ExperiencesDesktop />
        ))}
      <Footer />
    </>
  );
}
