const { render } = require('@testing-library/react');
const { default: LockerImformationPage } = require('./LockerImformationPage');

jest.mock('react-router-dom', () => ({
  useParams: () => 1,
}));

test('lockerImformation', () => {
  render(<LockerImformationPage />);
});
