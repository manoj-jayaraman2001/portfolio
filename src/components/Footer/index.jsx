import { Instagram, Facebook, Twitter } from '@mui/icons-material';
import './footer.scss'
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      <span className="span-text">
        &copy; {year} Developed by Manoj Jayaraman, All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
