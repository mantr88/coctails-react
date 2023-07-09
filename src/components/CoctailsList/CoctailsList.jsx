// import { useLocation } from "react-router-dom";
// import PropTypes from "prop-types";
// import axios from 'axios';
import {
  CardWrapper,
  ListContainer,
  CoctailName,
  StyledLink,
} from './CoctailsList.styled';
import { useQuery } from '@tanstack/react-query';
import { searchCoctailByName } from '../../services/api';
import { useLoaderData, useLocation } from 'react-router-dom';

const CoctailsList = () => {
  // const { query } = useLoaderData();
  // console.log(query);
  // const location = useLocation();
  // console.log(searchString);
  // if (searchString === '') {
  //   return <div>Please,enter search query</div>;
  // }

  // const { data, isLoading, isError } = useQuery({
  // queryKey: ['searchByName', searchString],
  // queryFn: searchCoctailByName(searchString),
  // options: {
  //   refetchOnWindowFocus: false,
  //   keepPreviousData: true,
  // },
  // });
  // const coctails = data;
  // if (isError) {
  //   return <div>Error data</div>;
  // }

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  // if (!coctails) {
  //   return <div>No coctails!</div>;
  // }

  return (
    <ListContainer>
      <div>Coctails page!</div>
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
