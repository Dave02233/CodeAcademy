import {Navigate, useNavigate} from 'react-router-dom';

export default function NavigateTo() {
    /*

    let loggedIn = true;
    return (
    loggedIn ?
    <Navigate to={'/RoutedPage'} /> :
    <h1>Non sei loggato</h1>
    )
    */
    const navigate = useNavigate();

    const handleClick = () => {
    
        navigate('/RoutedPage')

    }

    return (
        <>
        <button onClick={handleClick}>Navigate TO</button>
        </>
    )
}