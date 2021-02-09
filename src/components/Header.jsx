import { useState, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import './styles/Header.css';

const Header = () => {
  const [darkMode, setDarkmode] = useState(false);
  const {theme, setTheme} = useContext(ThemeContext);
  
  const handleClick = () => {
    setDarkmode(!darkMode);
    theme === 'LightMode' ? setTheme('DarkMode') : setTheme('LightMode');
  }

  return (
    <div className="Header">
      <h1>Logo</h1>
      <div className="Menu">
        <button type="button" onClick={handleClick}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
      </div>
    </div>
  );
}

export default Header;