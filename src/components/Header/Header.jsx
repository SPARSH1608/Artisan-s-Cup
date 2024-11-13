import { useNavigate } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your Fav food here</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          magni velit ut ipsam tenetur? Modi, dicta? Aliquam facere assumenda
          mollitia maiores eveniet incidunt dolor vero ea? Explicabo nam
        </p>
        <button>
          {' '}
          <a href="#explore-menu">View Menu</a>
        </button>
      </div>
    </div>
  );
};

export default Header;
