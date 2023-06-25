import { PropTypes } from "prop-types";
import { Container } from "./Layuot.styled";

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.any]),
};
