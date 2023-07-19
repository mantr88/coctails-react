import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getFullInfoAboutCoctailById } from '../../../services/api';

const CoctailInfo = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getInfoById', id],
    queryFn: () => getFullInfoAboutCoctailById(id),
    options: {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  });
  const coctail = data;

  // console.log(data);

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
    <div>
      <img src={strDrinkThumb} alt={strDrink} />
      <div>
        <h2>
          Coctail - {strDrink} - {idDrink}
        </h2>
        <p>{strInstructions}</p>
      </div>
    </div>
  );
};

export default CoctailInfo;
