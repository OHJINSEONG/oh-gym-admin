import { render, screen } from '@testing-library/react';
import ProductRegisterPage from './ProductRegisterPage';

test('productRegister', () => {
  render(<ProductRegisterPage />);

  screen.getByText('ProductRegsiter');
});
