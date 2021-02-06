import folderImg from '../assets/img/folderXP-256.png';
import './styles/Folder.css';

const Folder = () => {
  return(
    <div className="Folder">
      <img src={folderImg} alt="Folder"/>
      <p>Caption</p>
    </div>
  );
}

export default Folder;