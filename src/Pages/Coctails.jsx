import {
  useLoaderData,
  useNavigation,
  useSearchParams,
  useSubmit,
} from 'react-router-dom';
// import CoctailsList from '../components/CoctailsList/CoctailsList';
// import { SearchBox } from '../components/SearchBox/SearchBox';
import {
  Button,
  FormBox,
  Input,
  Span,
} from '../components/SearchBox/SearchBox.styled';
import { FcSearch } from 'react-icons/fc';
import {
  CardWrapper,
  ListContainer,
  CoctailName,
  StyledLink,
} from '../components/CoctailsList/CoctailsList.styled';
import { searchCoctailByName } from '../services/api';
import { useIsFetching, useQuery } from '@tanstack/react-query';
import { useDebounce } from 'rooks';

const coctailListQuery = q => ({
  queryKey: ['searchByName', 'list', q ?? 'all'],
  queryFn: searchCoctailByName(q),
});

export const loader =
  queryClient =>
  async ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get('q');
    if (!queryClient.getQueryData(coctailListQuery(q).queryKey)) {
      await queryClient.fetchQuery(coctailListQuery(q));
    }
    return { q };
  };

export const action = queryClient => async () => {
  const contact = await createContact();
  queryClient.invalidateQueries({ queryKey: ['contacts', 'list'] });
  return contact;
};

const Coctails = () => {
  // const [searchParams, setSearchParams] = useSearchParams({
  //   query: '',
  // });
  // const searchString = searchParams.get('query');

  // const handleSubmit = evt => {
  //   evt.preventDefault();

  //   const searchQueryStr = evt.target.elements.query.value;
  //   const searchQueryStrTrim = searchQueryStr.trim();

  //   setSearchParams({ query: searchQueryStrTrim });
  // };
  // console.log(useLoaderData());
  const { q } = useLoaderData();
  const { data: coctails } = useQuery(coctailListQuery(q));
  const searching = useIsFetching(['contacts', 'list']) > 0;
  const navigation = useNavigation();
  const submit = useSubmit();

  const debouncedSubmit = useDebounce(submit, 500);

  return (
    <div>
      Coctails Page
      {/* <SearchBox onSuubmit={handleSubmit} />
      <CoctailsList searchString={searchString} /> */}
      <FormBox role="search">
        <Input
          aria-label="Search coctails"
          placeholder="Search"
          type="text"
          name="q"
          key={q}
          onChange={e => {
            debouncedSubmit(e.currentTarget.form);
          }}
        ></Input>
        <Button type="submit">
          <FcSearch />
          <Span>Search</Span>
        </Button>
      </FormBox>
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
    </div>
  );
};

export default Coctails;
