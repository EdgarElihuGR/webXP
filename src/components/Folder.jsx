import folderImg from '../assets/img/folderXP-256.png';
import './styles/Folder.css';

const Folder = (props) => {
  return(
    <div className={`Folder ${props.className}`}>
      <img src={folderImg} alt="Folder"/>
      <p>{props.caption}</p>
    </div>
  );
}

export default Folder;