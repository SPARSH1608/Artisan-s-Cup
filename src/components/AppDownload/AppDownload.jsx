import { assets } from '../../assets/assets';
import './AppDownload.css';
const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <img src={assets.banner} alt="" />
      <span>
        For Better Experience <br />
        Download <br />
        Artisan Cup App
      </span>
    </div>
  );
};

export default AppDownload;
