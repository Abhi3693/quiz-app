import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
function Footer(props) {
  return (
    <footer>
      <div className='footer-top '>
        <div className='container flex space-btw gap-2'>
          <div className='flex-50 footer-input-holder'>
            <img className='footer-img' src={`static/alt.png`} alt='img' />
            <h2 className='clr-gray'>
              The Alternative to College That You Wish Existed
            </h2>
            <form>
              <input
                className='subscribe-input'
                type='text'
                placeholder='Enter Email'
              />
              <input className='subscribe' type='submit' value='SUBSCRIBE' />
            </form>
          </div>
          <div className='quick-link flex-25'>
            <h2 className='clr-white'>Quick Links</h2>
            <ol className='quick-link-list flex gap-1'>
              <Link to='/program'>
                <li className='clr-gray'>Program</li>
              </Link>
              <Link to='/about'>
                <li className='clr-gray'>About Us</li>
              </Link>
              <Link to='/contact'>
                <li className='clr-gray'>Contact us</li>
              </Link>
              <Link to='/faqs'>
                <li className='clr-gray'>FAQs</li>
              </Link>
            </ol>
          </div>
          <div className='follow-us flex flex-25 align-center'>
            <h2 className='clr-white'>Follow Us</h2>
            <div className='flex gap-2'>
              <a href='#a'>
                <FaFacebookF />
              </a>
              <a href='#a'>
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='container'>
          <h3 className='clr-gray text-center'>
            &copy; AltCampus Services Pvt. Ltd, 2018-present.
          </h3>
          <div className='flex gap-2 justify-center padd-1'>
            <h4 className='clr-gray'>Privacy</h4>
            <h4 className='clr-gray'>Terms</h4>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
