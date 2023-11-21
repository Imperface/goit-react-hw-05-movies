import { Link, Outlet, useParams } from 'react-router-dom';

export const Movies = () => {
  const { movieId } = useParams();
  return (
    <div>
      <Outlet />
    </div>
  );
};
