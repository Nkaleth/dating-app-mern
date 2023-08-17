import '../styles/Header.css';
import { Person, Forum } from '@mui/icons-material';
import { IconButton } from '@mui/material';

function Header() {
  return (
    <div className="header">
      <IconButton>
        <Person fontSize="large" className="header__icon" />
      </IconButton>
      <img src="../assets/images/logo182.png" alt="header" />
      <IconButton>
        <Forum fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
