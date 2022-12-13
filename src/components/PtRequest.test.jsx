import { render, screen, waitFor } from '@testing-library/react';
import PtRequest from './PtRequest';

test('ptRequest', async () => {
  render(<PtRequest />);

  await waitFor(() => {
    screen.getByText('1');
  });
});
