import { useNavigate } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <div className="header">
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
