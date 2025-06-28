import React, { useState, useEffect } from "react";
import style from './SearchBar.module.css';
import { getToken, getAccessToken, getStoredAccessToken } from '../Spotify/getToken';
import { searchSpotify } from '../Spotify/getInfo';
import SearchBarResults from './SearchBarResults';

function SearchBar () {
    const [searchName, setSearchName] = useState('');
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
        setResults(await searchSpotify(searchName));
    }

    const handleChange = ({target}) => {
        setSearchName(target.value);
        target.value.length > 0 ? searchRequest(target.value) : null;
    }

    const handleButtonlick = () => {
        searchRequest(searchName);
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

            {searchName ? <SearchBarResults results={results}/> : null}

        </>
    )
}

export default SearchBar;