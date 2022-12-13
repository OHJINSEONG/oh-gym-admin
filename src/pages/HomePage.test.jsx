import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('homepage', () => {
  render(<HomePage />);

  screen.getByText('Hello, MpGYM');
});
