import axios from 'axios';

axios.defaults.baseURL =
  'https://www.thecocktaildb.com/api/json/v1/1';

export const fetchRandomCoctail = async () => {
  const response = await axios.get('/random.php');
  const data = response.data.drinks[0];
  return data;
};
