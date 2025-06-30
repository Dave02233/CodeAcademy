import React, { useState, useEffect } from "react";
import style from './SearchBar.module.css';
import { getToken, getAccessToken, getStoredAccessToken } from '../Spotify/getToken';
import { searchSpotify } from '../Spotify/getSearch';
import SearchBarResults from './SearchBarResults';

function SearchBar ({ onSearch, savedResults }) {
    const [searchName, setSearchName] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [tokenRequested, setTokenRequested] = useState(false);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const accessToken = getStoredAccessToken();
        const code = new URL(window.location.href).searchParams.get('code');

        // Se non c'è code e non c'è access token, avvia login
        if (!accessToken && !code && !tokenRequested) {
            setTokenRequested(true);
            getToken();
        }

        // Se c'è code ma non access token, prendi il token UNA SOLA VOLTA
        if (!accessToken && code && !tokenRequested) {
            getAccessToken()
        }
    }, [tokenRequested]);

    
    const searchRequest = async (searchName) => {
        const results = await searchSpotify(searchName);
        setResults(results);
    }

    const handleChange = ({target}) => {
        setSearchName(target.value);
        handleShowResults(true);
        target.value.length > 0 ? searchRequest(target.value) : null;
    }

    const handleButtonlick = () => {
        if (searchName.length === 0) return;
        searchRequest(searchName);
        onSearch();
        savedResults(results);
        handleShowResults(false);
    }

    const handleShowResults = (value) => {
        setShowResults(value);
    }

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className={style.searchContainer}>
                    <input type="text" onChange={handleChange} placeholder="Cerca" />
                    <button type="submit" onClick={handleButtonlick}> 
                        <img src="/SearchIcon.png" alt="Search Icon" fill=""/>
                    </button>
                </div>
            </form>

            {showResults && searchName.length > 0 ? <SearchBarResults results={results}/> : null}

        </>
    )
}

export default SearchBar;