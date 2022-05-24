import { useState, useEffect } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Characters } from './components/Characters';
import { Navegando } from './components/Navegando';
import { Footer } from './components/Footer';

function App() {

  const [characters, setCharacters ] = useState([]);
  const [info, setInfo ] = useState([]);

  const initialUrl = "https://rickandmortyapi.com/api/character"
  const fetchCharacters = ( url ) =>{
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
  }

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }
  const onNext = () => {
    fetchCharacters(info.next);
  }

  useEffect( () => {
    fetchCharacters(initialUrl)
  }, [])

  

  return (
    <>
      <Navbar brand="Anime API de RickyRam"/>
        <div className='container mt-5'>
          <Navegando prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
          <Characters characters={characters} />
          <Navegando prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        </div>
      <Footer/>
    </>
  )
}

export default App
