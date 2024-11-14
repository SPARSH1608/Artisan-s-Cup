import { useNavigate } from 'react-router-dom';
import './Header.css';
import { assets } from '../../assets/assets';
const Header = () => {
  return (
    <div className="header">
      <img src={assets.header1} alt="" />
      <div className="header-contents">
        <h2>
          Enjoy your <br /> Delicious Food
        </h2>
        <p>
          After A Good Dinner One Can Forgive Anybody, Even <br /> One's Own
          Relations.
        </p>
        <button>
          {' '}
          <a href="#explore-menu">Order Now</a>
        </button>
      </div>
    </div>
  );
};

export default Header;
