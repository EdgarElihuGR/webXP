import { useContext } from 'react';
import Header from './components/Header';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import Folder from './components/Folder';
import Characters from './components/Characters';
import ThemeContext from './context/ThemeContext';
import './App.css';

function App() {
  
  let { theme } = useContext(ThemeContext);

  return (
      <div className={`App ${theme}`}>
        <Header />
        <Characters/>
        <Desktop>
          <Folder />
        </Desktop>
        <Taskbar />
      </div>
  );
}

export default App;
