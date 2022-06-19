import { FC } from 'react';
import Loader from '../Loader';

interface Props {
  loading: boolean;
  error: Error;
  children: React.ReactNode;
}

const StateWrapper: FC<Props> = ({ children, loading, error }) => {
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return <section>{children}</section>;
};

export default StateWrapper;
