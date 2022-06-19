import { FC } from 'react';
import { Link } from 'react-router-dom';

interface PersonProps {
  name: string;
  gender: string;
  planet: string;
  url: string;
}

const PersonCard: FC<PersonProps> = ({ name, gender, planet, url }) => (
  <div>
    <Link
      to={`/person/${name.toLowerCase().replaceAll(' ', '-')}`}
      state={{ url }}
    >
      <h3>Name: {name}</h3>
      <p>Gender: {gender}</p>
      <p>Planet: {planet}</p>
    </Link>
  </div>
);
export default PersonCard;
