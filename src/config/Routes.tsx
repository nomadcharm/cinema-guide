import { FC, lazy, ReactElement, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';

const LazyMainLoader = lazy(() => import('../components/Loaders/MainLoader/MainLoader'));
const LazyMainPage = lazy(() => import('../pages/MainPage/MainPage'));
const LazyGenresPage = lazy(() => import('../pages/GenresPage/GenresPage'));
const LazyGenrePage = lazy(() => import('../pages/GenrePage/GenrePage'));
const LazyFilmPage = lazy(() => import('../pages/FilmPage/FilmPage'));

const AppRoutes: FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LazyMainLoader />}>
        <Routes>
          <Route path={"/"} element={<LazyMainPage />} />
          <Route path={"/genres"} element={<LazyGenresPage />} />
          <Route path={"/movie"} element={<LazyGenrePage />} />
          <Route path={"movie/:id"} element={<LazyFilmPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
