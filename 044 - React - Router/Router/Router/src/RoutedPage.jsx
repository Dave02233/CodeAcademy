import { Link } from 'react-router-dom';

function RoutedPage() {

  return (
    <>
    <p>sei stato reindirizzato con successo</p>
    <Link to={'/'}>Torna alla home</Link>
    <br />
    <a href="/">Torna alla home ma lentamente</a>
    </>
  )
}

export default RoutedPage
