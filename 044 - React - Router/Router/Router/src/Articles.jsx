import { Link, useParams, useSearchParams, Outlet } from 'react-router-dom';

function Articles() {

  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = () => {
    setSearchParams({
      q: 'nuovo parametro',
      id: 'nuovo id'
    })
  }

  return (
    <>
    <Link to={'/'}>Torna alla home</Link>
    <br />
    <h1>Articolo "{id}" con query parameters "{searchParams.get('q')}"</h1>
    <br />
    <button onClick={handleClick}>Change Parameters</button>
    <br />
    <Link to={`/Articles/${id}/item`}>Vai al child di Articles</Link>
    <Outlet />
    </>
  )
}


export default Articles
