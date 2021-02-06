import { useState } from 'react';
import './styles/Header.css';

const Header = () => {
  const [darkMode, setDarkmode] = useState(false);
  return (
    <div className="Header">
      <h1>Logo</h1>
      <div className="Menu">
        <button type="button" onClick={() => setDarkmode(!darkMode)}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
      </div>
    </div>
  );
}

export default Header;