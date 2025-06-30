import React, { useState } from 'react'
import style from './App.module.css';
import SearchBar from './components/SearchBar';
import SearchBarResults from './components/SearchBarResults';
import Results from './components/Results';


function App() {
  const [searchState, setSearchState] = useState(false);
  const [results, setResults] = useState({});

  const handleSearch = () => {
    setSearchState(true);
  };

  const handleResults = (newResults) => {
    setResults(newResults);
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} savedResults={handleResults}/>
      {searchState ? <Results savedResults={results} /> : null}
    </>
  );
}

export default App
