import { Layout, NotFound } from 'components';
import { Home, Movies } from 'pages';
import { MovieDetails } from 'components';
import { Route, Routes } from 'react-router-dom';
import { AppContainer } from './App.styled';

// ? Layout - wrapper, create basic structure
// ? path= "*" - page for wrong path, return to "/"

export const App = () => (
  <AppContainer>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies/" element={<Movies />} />
        <Route path="movies/:movieId/*" element={<MovieDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </AppContainer>
);
