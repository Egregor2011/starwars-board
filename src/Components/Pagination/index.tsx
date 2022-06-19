import { FC } from 'react';

interface Props {
  previous: string;
  next: string;
  current: number;
  handlePrevious: () => void;
  handleNext: () => void;
}

const Pagination: FC<Props> = ({
  previous,
  next,
  current,
  handleNext,
  handlePrevious,
}) => {
  return (
    <div className="flex gap-8 mb-5 mt-5">
      <button type="button" disabled={!previous} onClick={handlePrevious}>
        Previous Page
      </button>
      <span>{current}</span>
      <button type="button" disabled={!next} onClick={handleNext}>
        Next Page
      </button>
    </div>
  );
};
export default Pagination;
