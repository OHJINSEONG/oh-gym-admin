import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

// jest.mock('use-resize-observer', () => ({
//   __esModule: true,
//   default: jest.fn().mockImplementation(() => ({
//     observe: jest.fn(),
//     unobserve: jest.fn(),
//     disconnect: jest.fn(),
//   })),
// }));

test('homepage', () => {
  render(<HomePage />);

  screen.getByText('Hello, MpGY');
});
