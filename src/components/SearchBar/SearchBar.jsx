import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormStyled } from './SearchBar.sryled';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <>
      <h2
        style={{
          marginBottom: '16px',
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
      >
        Search Movie
      </h2>
      <FormStyled onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit" disabled={!query}>
          GO
        </button>
      </FormStyled>
    </>
  );
};
export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
