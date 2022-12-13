import { render, screen } from '@testing-library/react';
import Header from './Header';

const context = describe;

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  Link({ children, to }) {
    return (
      <a href={to}>
        {children}
      </a>
    );
  },
  useNavigate: () => navigate,
}));

describe('header', () => {
  it(('render "home" link'), () => {
    render(<Header />);

    screen.getByText('home');
  });

  it(('render "workers" link'), () => {
    render(<Header />);

    screen.getByText('workers');
  });

  it(('render "members" link'), () => {
    render(<Header />);

    screen.getByText('members');
  });

  it(('render "products" link'), () => {
    render(<Header />);

    screen.getByText('products');
  });
});
