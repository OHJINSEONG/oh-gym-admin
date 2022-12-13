const { render, screen } = require('@testing-library/react');
const { MemoryRouter } = require('react-router');
const { default: App } = require('./App');

jest.mock('react-big-calendar/lib/css/react-big-calendar.css', () => null);
jest.mock('react-datepicker/dist/react-datepicker.css', () => null);

test('App', () => {
  render((
    <div>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </div>
  ));

  screen.getByText(/Hello, MpGYM/);
});
