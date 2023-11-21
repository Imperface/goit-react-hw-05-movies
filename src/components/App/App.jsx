import { Cast, Layout, NotFound, Reviews } from 'components';
import { Home, Movies, MoviesSearch } from 'pages';
import { MovieDetails } from 'components';
import { Route, Routes } from 'react-router-dom';
import { AppContainer } from './App.styled';
export const App = () => (
  <AppContainer>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="movies/" element={<Movies />}>
          <Route index element={<MoviesSearch />} />
          <Route path=":movieId/" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </AppContainer>
);
