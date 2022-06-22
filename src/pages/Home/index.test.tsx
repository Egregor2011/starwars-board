import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Home from '.';

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<Home />);
    const title = screen.getAllByText('List of Characters');
    expect(title).toHaveLength(1);
  });

  it('the input is in the document', () => {
    render(<Home />);
    const input = screen.getByPlaceholderText('Search for a character');
    expect(input).toBeInTheDocument();
  });
});
