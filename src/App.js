import { useContext } from 'react';
import Header from './components/Header';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import Folder from './components/Folder';
import ThemeContext from './context/ThemeContext';
import './App.css';

function App() {
  
  let { theme } = useContext(ThemeContext);

  return (
      <div className={`App ${theme}`}>
        <Header />
        <Desktop>
          <Folder caption="Fotos" className="Folder1"/>
          <Folder caption="Videos" className="Folder2"/>
          <Folder caption="Docs" className="Folder3"/>
        </Desktop>
        <Taskbar />
      </div>
  );
}

export default App;
