import { Link } from 'react-router-dom';

function Item() {

  return (
    <>
    <h3>Ecco il child di article</h3>
    <Link to={'/NavigateTo'}>Vai a Navigate To</Link>
    </>
  )
}

export default Item
