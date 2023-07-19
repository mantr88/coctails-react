import { PropTypes } from 'prop-types';
import { Container } from './Layuot.styled';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';

export const Layout = () => {
  return (
    <Container>
      <Navigation />
      <Outlet />
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.any]),
};
