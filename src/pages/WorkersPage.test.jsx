import { render, screen } from '@testing-library/react';
import WorkersPage from './WorkersPage';

jest.mock('react-router-dom', () => ({
  Link({ children, to }) {
    return (
      <a href={to}>
        {children}
      </a>
    );
  },
}));

test('WorkersPage', () => {
  render(<WorkersPage />);

  screen.getByText('Workers');
});
