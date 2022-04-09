import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <div className='not-found-holder'>
      <h1 className='not-found'>404 | Page Not Found</h1>
      <Link className='go-home' to='/'>
        Home
      </Link>
    </div>
  );
}

export default NotFound;
