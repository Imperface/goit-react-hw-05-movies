import { ReactComponent as Logo } from 'icons/29c6fee-blue_short.svg';
import { FooterWrapper } from './Footer.styled';
import { Container } from 'components';
export const Footer = () => (
  <FooterWrapper>
    <Container>
      <p>The site was created for educational purposes.</p>
      <a
        href="https://www.themoviedb.org/"
        target="_blank"
        rel="noreferrer nooperner"
      >
        <Logo />
        Link to TMDB official site
      </a>
      <p>
        This website uses TMDB and the TMDB APIs but is not endorsed, certified,
        or otherwise approved by TMDB
      </p>
    </Container>
  </FooterWrapper>
);
