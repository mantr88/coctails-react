import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';
import { Button, FormBox, Input, Span } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  return (
    <FormBox onSubmit={onSubmit}>
      <Input type="text" name="query"></Input>
      <Button type="submit">
        <FcSearch />
        <Span>Search</Span>
      </Button>
    </FormBox>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
