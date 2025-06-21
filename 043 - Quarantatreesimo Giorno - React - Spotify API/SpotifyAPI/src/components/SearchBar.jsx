import React, { useState } from "react";
import style from './SearchBar.module.css';

function SearchBar () {
    const [searchName, setSearchName] = useState('');

    const handleChange = ({target}) => {
        setSearchName(target.value);
    }

    const handleInputClick = () => {

    }

    const handleButtonlick = () => {

    }

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className={style.searchContainer}>
                    <input type="text" onChange={handleChange} placeholder="Cerca" onClick={handleInputClick}/>
                    <button type="submit" onClick={handleButtonlick}> 
                        <img src="/SearchIcon.png" alt="Search Icon" fill=""/>
                    </button>
                </div>
            </form>
        </>
    )
}

export default SearchBar;