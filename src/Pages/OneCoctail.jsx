import { useParams } from 'react-router-dom';
import { getFullInfoAboutCoctailById } from '../services/api';
import { useQuery } from '@tanstack/react-query';

const OneCoctail = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: 'getInfoById',
    queryFn: getFullInfoAboutCoctailById(id),
    options: {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  });
  const coctail = data;

  console.log(coctail);

  if (isError) {
    return <div>Error data</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!coctail) {
    return <div>No coctails!</div>;
  }

  const { strDrink, idDrink, strInstructions, strDrinkThumb } =
    coctail;

  return (
    <main>
      <img src={strDrinkThumb} alt={strDrink} />
      <div>
        <h2>
          Coctail - {strDrink} - {idDrink}
        </h2>
        <p>{strInstructions}</p>
      </div>
    </main>
  );
};

export default OneCoctail;
