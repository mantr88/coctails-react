import { useQuery } from '@tanstack/react-query';
import { SearchBox } from '../modules/coctails/SearchBox/SearchBox';
import { searchCoctailByName } from '../services/api';
import { useSearchParams } from 'react-router-dom';
import CoctailsList from '../modules/coctails/CoctailsList/CoctailsList';

const Coctails = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    query: '',
  });

  const searchString = searchParams.get('query');

  const { isError, isLoading, data, isSuccess } = useQuery({
    queryKey: ['coctailsByName', searchString],
    queryFn: () => searchCoctailByName(searchString),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  const handleSubmit = evt => {
    evt.preventDefault();

    const searchQueryStr = evt.target.elements.query.value;
    const searchQueryStrTrim = searchQueryStr.trim();

    setSearchParams({ query: searchQueryStrTrim });
  };
  return (
    <main>
      <SearchBox onSubmit={handleSubmit} />
      {isLoading && <div>LOADING...</div>}
      {data && !isLoading && !isError && (
        <CoctailsList coctails={data} />
      )}
      {!data && !isLoading && !isError && (
        <div>Please enter name of coctail</div>
      )}
      {!isSuccess && <div>Enter another name of coctail</div>}
    </main>
  );
};

export default Coctails;
