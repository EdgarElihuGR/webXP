import { useState, useEffect, useContext } from "react";
import './styles/Characters.css'
import ThemeContext from '../context/ThemeContext';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  let { theme } = useContext(ThemeContext);

  //Async Await implementation to avoid undefined array
  const getCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    setCharacters(data.results);
    console.log(data);
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return(
    <div className={`Characters ${theme}`}>
      {characters.map(character => (
        <div className="Characters__item">
          <img src={character.image} alt={character.name} />
          <h3>{character.name}</h3>
          <p>Status: {character.status}</p>
          <p>Location: {character.location.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Characters;