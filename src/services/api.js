import axios from 'axios';

// axios.defaults.baseURL =
//   'https://www.thecocktaildb.com/api/json/v1/1';

export const fetchRandomCoctail = async () => {
  const response = await axios.get(
    'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  );
  console.log(response);
  //   const data = response.data.drinks[0];
  return response;
};
