import { FC, lazy, ReactElement, Suspense } from "react";
import { Route, Routes } from "react-router";

const LazyMainLoader = lazy(() => import("../components/Loaders/MainLoader/MainLoader"));
const LazyMainPage = lazy(() => import("../pages/MainPage/MainPage"));
const LazyGenresPage = lazy(() => import("../pages/GenresPage/GenresPage"));
const LazyGenrePage = lazy(() => import("../pages/GenrePage/GenrePage"));
const LazyFilmPage = lazy(() => import("../pages/FilmPage/FilmPage"));
const LazyUserAccount = lazy(() => import("../pages/UserAccountPage/UserAccountPage"))

const AppRoutes: FC = (): ReactElement => {
  return (
    <Suspense fallback={<LazyMainLoader />}>
      <Routes>
        <Route path={""} element={<LazyMainPage />} />
        <Route path={"/genres"} element={<LazyGenresPage />} />
        <Route path={"/movie"} element={<LazyGenrePage />} />
        <Route path={"/movie/:id"} element={<LazyFilmPage />} />
        <Route path={"/profile"} element={<LazyUserAccount />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
