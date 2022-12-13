import { render, screen, waitFor } from '@testing-library/react';
import WorkerManagePage from './WorkerManagePage';

jest.mock('react-datepicker/dist/react-datepicker.css', () => null);
jest.mock('react-big-calendar/lib/css/react-big-calendar.css', () => null);

test('workerManagePage', async () => {
  render(<WorkerManagePage />);

  await waitFor(() => {
    screen.getByText('이번달 계획표');
  });
});
