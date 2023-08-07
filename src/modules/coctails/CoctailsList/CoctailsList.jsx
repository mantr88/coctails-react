import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  CardWrapper,
  ListContainer,
  CoctailName,
  StyledLink,
} from './CoctailsList.styled';

const CoctailsList = ({ coctails }) => {
  const location = useLocation();

  return (
    <ListContainer>
      {coctails &&
        coctails.map(({ idDrink, strDrinkThumb, strDrink }) => (
          <CardWrapper key={idDrink}>
            <StyledLink to={`/${idDrink}`} state={{ from: location }}>
              <img src={strDrinkThumb} alt={strDrink} width="100%" />
              <CoctailName>{strDrink}</CoctailName>
            </StyledLink>
          </CardWrapper>
        ))}
    </ListContainer>
  );
};

CoctailsList.propTypes = {
  coctails: PropTypes.shape({
    idDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
  }),
};

export default CoctailsList;
