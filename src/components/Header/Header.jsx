import { NavLink } from 'react-router-dom';

export const Header = () => (
  <header>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/movies/">Movies</NavLink>
  </header>
);
