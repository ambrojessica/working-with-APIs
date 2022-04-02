import React, { useState } from 'react';

const Search = ({ item }) => {

  const [term, setTerm] = useState('');
  const [searchMsg, setSearchMsg] = useState(false);

  const handleTextInput = (e) => {
    setTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    item(term);
    if (term === '') {
      setSearchMsg(false);
    } else {
      setSearchMsg(true);
    }
  };

  return (
    <div className='searchBar'>
      <form onSubmit={handleSearch}>
        <input
          placeholder='Search Art'
          name='search-input'
          value={term}
          onChange={handleTextInput}
        />
        <button>🎨</button>
        {searchMsg && <p>The Art Work you are looking for!</p>}
        {!searchMsg && <p></p>}
      </form>
    </div>
  );
};

export default Search;