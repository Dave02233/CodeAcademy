import React, { useEffect, useState } from "react";
import { saveTrackToFavorites } from '../Spotify/putSaveTrack';
import { removeTrackFromFavorites } from '../Spotify/removeSaveTrack';
import { isTrackSaved } from '../Spotify/isTrackSaved';
import style from './Results.module.css';

function Results({ savedResults }) {
    console.log('Results component', savedResults);

    if (!savedResults.tracks) return null;

    const { tracks, artists } = savedResults;

    return (
        <div className={style.displaySearchBarResults}>
            <h2 className={style.title}>Artisti</h2>
            <hr />
            <ul className={style.displayTracks}>
                {artists.items.map(artist => (
                    <li key={artist.id} className={style.trackItem}>
                        {artist.images[0]
                            ? <img src={artist.images[0].url} alt='ArtistImage' />
                            : null
                        }
                        <a href={artist.external_urls.spotify} target="_blank" className={style.linkStyle}>
                            <p>{artist.name}</p>
                        </a>
                    </li>
                ))}
            </ul>
            <hr />
            <h2 className={style.title}>Brani</h2>
            <hr />
            <ul className={style.displayTracks}>
                {tracks.items.map(track => (
                    <TrackItem key={track.id} track={track} />
                ))}
            </ul>
        </div>
    );
}

function TrackItem({ track }) {
    const [saved, setSaved] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let mounted = true;
        isTrackSaved(track.id).then(isSaved => {
            if (mounted) setSaved(isSaved);
        }).catch(() => {});
        return () => { mounted = false; };
    }, [track.id]);

    const handleToggle = async () => {
        setLoading(true);
        try {
            if (saved) {
                await removeTrackFromFavorites(track.id);
                setSaved(false);
            } else {
                await saveTrackToFavorites(track.id);
                setSaved(true);
            }
        } catch (e) {}
        setLoading(false);
    };

    return (
        <li className={style.trackItem}>
            {track.album.images[0] ? <img src={track.album.images[0].url} alt='songImage'/> : null}
            <a href={track.external_urls.spotify} target="_blank" className={style.linkStyle}>
                <p>{track.name} - {track.artists.map(a => a.name).join(', ')}</p>
            </a>
            <button onClick={handleToggle} style={{marginLeft: '1rem'}} disabled={loading}>
                {saved ? 'Rimuovi' : 'Salva'}
            </button>
        </li>
    );
}

export default Results;