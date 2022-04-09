import { NavLink, Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';

function Header(props) {
  return (
    <header>
      <div className='container flex space-btw align-center'>
        <div className='logo-holder flex align-center'>
          <img className='logo' src='/static/altcampus.jpeg' alt='img' />
          <h2 className='blog'>blog</h2>
        </div>
        <nav>
          <ol className='flex gap-2'>
            <NavLink to='/program'>
              <li className='clr-white'>Articles</li>
            </NavLink>
            <NavLink to='/program'>
              <li className='clr-white'>Blogs</li>
            </NavLink>
            <li className='more'>
              More <FaAngleDown />
              <ol className='more-list'>
                <Link to='/program'>
                  <li>Program</li>
                </Link>
                <Link to='/ligeataltcampus'>
                  <li>Life at AltCampus</li>
                </Link>
                <Link to='/online'>
                  <li>Online</li>
                </Link>
                <Link to='/faqs'>
                  <li>FAQs</li>
                </Link>
                <Link to='/contact'>
                  <li>Contact us</li>
                </Link>
                <Link to='/about'>
                  <li>About us</li>
                </Link>
              </ol>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
}

export default Header;
