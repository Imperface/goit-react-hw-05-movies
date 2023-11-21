import { FilmItem } from 'components/FilmItem/FilmItem';
import { List } from './FilmList.styled';
export const FilmList = ({ films }) => {
  return (
    <List>
      {films.map(item => (
        <li key={item.id}>
          <FilmItem title={item.title} id={item.id} />
        </li>
      ))}
    </List>
  );
};
