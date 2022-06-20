import { memo } from 'react';
import { Link } from 'react-router-dom';

interface PersonProps {
  name: string;
  gender: string;
  planet: string;
  url: string;
}

const PersonCard = memo(({ name, gender, planet, url }: PersonProps) => (
  <div className="p-5 flex flex-col justify-around gap-2 items-center border-gray-400 border-2 rounded-md">
    <h3 className="text-3xl">{name}</h3>
    <span className="text-2xl">{gender}</span>
    <span className="text-2xl">{planet}</span>
    <Link
      to={`/person/${name.toLowerCase().replaceAll(' ', '-')}`}
      state={{ url }}
    >
      <span className="text-sky-600">Details</span>
    </Link>
  </div>
));
export default PersonCard;
