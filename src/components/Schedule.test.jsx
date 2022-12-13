import { render, screen, waitFor } from '@testing-library/react';

import Schedule from './Schedule';

jest.mock('react-big-calendar/lib/css/react-big-calendar.css', () => null);

test('Schdule', async () => {
  render(<Schedule />);

  await waitFor(() => {
    screen.getByText('이번달 계획표');
  });
});
