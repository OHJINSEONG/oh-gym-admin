import { render, screen, waitFor } from '@testing-library/react';
import ProductsPage from './ProductsPage';

jest.mock('react-router-dom', () => ({
  Link({ children, to }) {
    return (
      <a href={to}>
        {children}
      </a>
    );
  },
}));

test('productsPage', async () => {
  render(<ProductsPage />);

  await waitFor(() => {
    screen.getByText('Products');
  });
});
