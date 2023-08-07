import {
  CardWrapper,
  ListContainer,
  CoctailName,
  StyledLink,
} from './CoctailsList.styled';

const CoctailsList = ({ coctails }) => {
  return (
    <ListContainer>
      {coctails &&
        coctails.map(({ idDrink, strDrinkThumb, strDrink }) => (
          <CardWrapper key={idDrink}>
            <StyledLink
              to={`/coctails/${idDrink}`}
              state={{ from: location }}
            >
              <img src={strDrinkThumb} alt={strDrink} />
              <CoctailName>{strDrink}</CoctailName>
            </StyledLink>
          </CardWrapper>
        ))}
    </ListContainer>
  );
};

export default CoctailsList;
