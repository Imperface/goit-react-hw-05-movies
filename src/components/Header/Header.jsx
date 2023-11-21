import { Container } from 'components';
import { NavLink } from 'react-router-dom';
import { HeaderWrapper } from './Header.styled';

export const Header = () => (
  <HeaderWrapper>
    <Container>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies/">Movies</NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  </HeaderWrapper>
);
