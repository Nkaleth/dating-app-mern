import '../styles/Header.css';
import { Person, Forum } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import logo192 from '../assets/images/logo192.png';

function Header() {
  return (
    <div className="header">
      <IconButton>
        <Person fontSize="large" className="header__icon" />
      </IconButton>
      <img className="header__logo" src={logo192} alt="header" />
      <IconButton>
        <Forum fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
