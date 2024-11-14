import { useNavigate, useSearchParams } from 'react-router-dom';
import './Verify.css';
import { useContext, useEffect } from 'react';
import { storeContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');
  const { url, setToken } = useContext(storeContext);
  const navigate = useNavigate();
  const verifyPayment = async () => {
    const res = await axios.post(url + '/api/order/verify', {
      success,
      orderId,
    });
    if (res.data.success) {
      navigate('/myorders');
    } else {
      navigate('/');
    }
  };
  useEffect(() => {
    setToken(localStorage.getItem('token'));
    verifyPayment();
  }, []);
  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
