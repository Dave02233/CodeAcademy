import React from "react";
import style from './SearchBarResults.module.css';

function SearchBarResults(props) {
    const { results } = props;

    if (!results || !results.tracks) return null;

    const tracks = results.tracks.items || [];

    return (
        <div className={style.displaySearchBarResults}>
            {tracks.length > 0 ? (
                <ul className={style.displayTracks}>
                    {tracks.map(track => (
                        <li key={track.id} className={style.trackItem}>         
                            {track.album.images[0] && (
                                <img src={track.album.images[0].url} alt='songImage'/>
                            )}
                                <a href={track.external_urls.spotify} target="_blank" className={style.linkStyle}>
                                <p>{track.name} - {track.artists.map(a => a.name).join(', ')}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nessun risultato</p>
            )}
        </div>
    );
}

export default SearchBarResults;