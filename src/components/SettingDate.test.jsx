const { render, screen, waitFor } = require('@testing-library/react');
const { default: SettingDate } = require('./SettingDate');

jest.mock('react-datepicker/dist/react-datepicker.css', () => null);

test('settingDate', async () => {
  render(<SettingDate />);

  await waitFor(() => {
    screen.getByText('반복 설정');
  });
});
