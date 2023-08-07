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
  const { isError, isLoading, data, error } = useQuery({
    query: ['coctailsByName'],
    queryFn: () => searchCoctailByName(searchString),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt.target.elements.query.value);

    const searchQueryStr = evt.target.elements.query.value;
    const searchQueryStrTrim = searchQueryStr.trim();

    setSearchParams({ query: searchQueryStrTrim });
  };
  return (
    <main>
      <SearchBox onSubmit={handleSubmit} />
      <CoctailsList coctails={data} />
    </main>
  );
};

export default Coctails;
