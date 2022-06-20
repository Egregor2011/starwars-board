import { FC } from 'react';

interface Props {
  previous: string | null | undefined;
  next: string | null | undefined;
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
  if (!previous && !next) {
    return null;
  }

  return (
    <div className="flex gap-8 mb-5 mt-5 justify-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed "
        type="button"
        disabled={!previous}
        onClick={handlePrevious}
      >
        Previous
      </button>
      {current ? <span className="text-2xl font-bold">{current}</span> : null}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        type="button"
        disabled={!next}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;
