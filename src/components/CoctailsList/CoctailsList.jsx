// import { useLocation } from "react-router-dom";
// import PropTypes from "prop-types";
import axios from 'axios';
import {
  CardWrapper,
  ListContainer,
  CoctailName,
} from './CoctailsList.styled';
import { useState, useEffect } from 'react';

axios.defaults.baseURL =
  'https://www.thecocktaildb.com/api/json/v1/1';

const CoctailsList = () => {
  //   const location = useLocation();
  const [coctails, setCoctails] = useState([]);

  const fetchRandomCoctails = async () => {
    const response = await axios.get('/random.php');
    console.log(response.data.drinks[0]);
    const data = response.data.drinks[0];
    setCoctails(data);
  };
  useEffect(() => {
    fetchRandomCoctails();
  }, []);

  if (!coctails) {
    return <div>No coctails!</div>;
  }

  return (
    <ListContainer>
      {coctails.map(({ idDrink, strDrinkThumb, strDrink }) => (
        <CardWrapper key={idDrink}>
          {/* <StyledLink to={`/movies/${idDrink}`} state={{ from: location }}> */}
          <img
            src={
              strDrinkThumb
              // ? `https://image.tmdb.org/t/p/w300${poster_path}`
              // : "https://www.movienewz.com/img/films/poster-holder.jpg"
            }
            alt={strDrink}
          />
          <CoctailName>{strDrink}</CoctailName>
          {/* </StyledLink> */}
        </CardWrapper>
      ))}
    </ListContainer>
  );
};

export default CoctailsList;
