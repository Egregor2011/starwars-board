import { FC } from 'react';
import { SWCharacter } from '../../pages/Home/types';
import PersonCard from '../PersonCard';

interface Props {
  people: SWCharacter[];
}

const PersonList: FC<Props> = ({ people }) => {
  return (
    <div className="grid grid-cols-5 my-7 gap-5">
      {people.map((person: SWCharacter) => (
        <PersonCard
          key={person.name}
          name={person.name}
          gender={person.gender}
          planet={person?.planet?.name as string}
          url={person.url}
        />
      ))}
    </div>
  );
};
export default PersonList;
