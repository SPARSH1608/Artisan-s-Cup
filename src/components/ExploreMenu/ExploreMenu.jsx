import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  // console.log(category);
  return (
    <div className="explore-menu" id="explore-menu">
      <h1> Our Menu</h1>
      <p className="explore-menu-text">
        Food For Us Comes From Our Relatives, Whether They Have Wings Or Fins Or
        Roots. That Is How We consider Food. Food Has A Culture. It has A
        History . It Has A Story . It Has Relationships.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => {
                setCategory((prev) =>
                  prev === item.menu_name ? 'All' : item.menu_name
                );
              }}
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? 'active' : ''}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
