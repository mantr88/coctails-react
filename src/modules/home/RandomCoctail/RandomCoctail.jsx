import { useLocation } from 'react-router-dom';
// import PropTypes from "prop-types";
import {
  CardWrapper,
  CoctailName,
  StyledLink,
} from './RandomCoctail.styled';
import { useQuery } from '@tanstack/react-query';
import { fetchRandomCoctail } from '../../../services/api';

const RandomCoctail = () => {
  const location = useLocation();
  const { data, isError, isLoading } = useQuery({
    queryKey: ['randomCoctails'],
    queryFn: fetchRandomCoctail,
  });

  if (isError) {
    return <div>Error data</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No coctail!</div>;
  }

  const { idDrink, strDrinkThumb, strDrink } = data;

  return (
    <CardWrapper key={idDrink}>
      <StyledLink to={`/${idDrink}`} state={{ from: location }}>
        <img src={strDrinkThumb} alt={strDrink} />
        <CoctailName>{strDrink}</CoctailName>
      </StyledLink>
    </CardWrapper>
  );
};

export default RandomCoctail;
