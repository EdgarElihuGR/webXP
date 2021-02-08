import './styles/Header.css';

const Header = (props) => {
  return (
    <div className="Header">
      <h1>Logo</h1>
      <div className="Menu">
        <button type="button" onClick={() => props.onClick()} >{props.darkMode ? 'Dark Mode' : 'Light Mode'}</button>
      </div>
    </div>
  );
}

export default Header;