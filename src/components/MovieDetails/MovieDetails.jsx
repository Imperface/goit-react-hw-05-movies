import { statuses, API_KEY } from 'constants';
import { lazy, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import { Error, Loader, Section } from 'components';
import axios from 'axios';
import {
  MovieAdditionInfo,
  MovieInfoGanres,
  MovieInfoWrapper,
  MovieWrapper,
} from './MovieDetails.styled';
import { format } from 'date-fns';

// lazy import
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [status, setStatus] = useState(statuses.IDLE);
  const [movieData, setMovieData] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const options = {
          method: 'GET',
          url: `https://api.themoviedb.org/3/movie/${movieId}`,
          params: { language: 'en-US', api_key: API_KEY },
          headers: {
            accept: 'application/json',
          },
        };
        setStatus(statuses.PENDING);
        const { data } = await axios.request(options);
        setMovieData(data);
        setStatus(statuses.RESOLVED);
      } catch (error) {
        setStatus(statuses.REJECTED);
      }
    };
    fetchMovie();
  }, [movieId]);

  if (status === statuses.PENDING) {
    return <Loader />;
  }

  if (status === statuses.RESOLVED) {
    const { poster_path, title, overview, genres, release_date, vote_average } =
      movieData;
    return (
      <>
        <Section>
          <Link to={backLinkLocationRef.current}>Go Back</Link>
          <MovieWrapper>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={`poster for the movie ${title}`}
              loading="lazy"
            />
            <MovieInfoWrapper>
              <h2>{`${title} (${format(new Date(release_date), 'yyyy')})`}</h2>
              <p>
                <b>Vote average: </b>
                {`${Math.floor(vote_average * 10)}%`}
              </p>
              <div>
                <p>
                  <b>Overview: </b>
                </p>
                <p>{`${overview}`}</p>
              </div>
              <MovieInfoGanres>
                <p>
                  <b>Genres:</b>
                </p>
                <div>
                  {genres.map(({ name, id }) => (
                    <span key={id}>{name}</span>
                  ))}
                </div>
              </MovieInfoGanres>
            </MovieInfoWrapper>
          </MovieWrapper>
        </Section>

        <Section>
          <MovieAdditionInfo>
            <ul>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </ul>
          </MovieAdditionInfo>
        </Section>

        <Routes>
          <Route path="reviews/" element={<Reviews />} />
          <Route path="cast/" element={<Cast />} />
        </Routes>
      </>
    );
  }
  if (status === statuses.REJECTED) {
    return <Error />;
  }
};
export default MovieDetails;
