import axios from 'axios';

axios.defaults.baseURL = `https://www.thecocktaildb.com/api/json/v1/1`;

export const fetchRandomCoctail = async () => {
  const response = await axios.get(`/random.php`);
  const data = response.data.drinks[0];
  return data;
};

export const searchCoctailByName = async searchString => {
  console.log(searchString);
  const response = await axios.get(`/search.php?f=${searchString}`);
  const data = response.data.drinks;
  return data;
};

export const getFullInfoAboutCoctailById = async id => {
  const response = await axios.get(`/lookup.php?i=${id}`);
  const data = response.data.drinks[0];
  return data;
};
