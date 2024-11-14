import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const storeContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = 'https://artisancup-backend.onrender.com';
  const [token, setToken] = useState('');
  const [food_list, setFoodList] = useState([]);
  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      const response = await axios.post(
        url + '/api/cart/add',
        { itemId },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success('item Added to Cart');
      } else {
        toast.error('Something went wrong');
      }
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      const response = await axios.post(
        url + '/api/cart/remove',
        { itemId },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success('item Removed from Cart');
      } else {
        toast.error('Something went wrong');
      }
    }
  };

  const getTotalCartAmount = () => {
    // console.log(food_list);
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        // console.log(itemInfo);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url + '/api/food/list');
    if (response.data.success) {
      setFoodList(response.data.data);
    } else {
      alert('Error! Products are not fetching..');
    }
  };

  const loadCartData = async (token) => {
    const response = await axios.post(
      url + '/api/cart/get',
      {},
      { headers: { token } }
    );
    // console.log('hello');
    // console.log('Cart Data Response: ', response.data); // Debugging line
    setCartItems(response.data.cartData);
  };
  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      const token = localStorage.getItem('token');
      if (token) {
        await loadCartData(token);
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };
  return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  );
};
export default StoreContextProvider;
