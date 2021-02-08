import { useState } from 'react';
import Header from './components/Header';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import Folder from './components/Folder'
import Characters from './components/Characters';
import './App.css';

function App() {
  const [darkMode, setDarkmode] = useState(false);
  let darkModeStyle = darkMode ? 'DarkMode' : '';
  return (
    <div className={`App ${darkModeStyle}`}>
      <Header 
        darkMode = {darkMode}
        onClick = {() => setDarkmode(!darkMode)}
      />
      <Characters darkMode = {darkMode}/>
      <Desktop>
        <Folder />
      </Desktop>
      <Taskbar />
    </div>
  );
}

export default App;
