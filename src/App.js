import Header from './components/Header';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import Folder from './components/Folder'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Desktop>
        <Folder />
      </Desktop>
      <Taskbar />
    </div>
  );
}

export default App;
