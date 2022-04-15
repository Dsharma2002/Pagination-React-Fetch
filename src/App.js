import React, { useEffect, useState } from 'react';
import PokemonList from './PokemonList';
import Page from './Page';
import './App.css';

function App() {

  const [pokemons, setPokemons] = useState([])
  const [currentPageURL, setCurrentPageURL] = useState(`https://pokeapi.co/api/v2/pokemon`)
  const [nextPageURL, setNextPageURL] = useState("")
  const [prevPageURL, setPrevPageURL] = useState("")
  const [pageNum, setPageNum] = useState(1)
  const [pokePage, setPokePage] = useState(1)

  useEffect(() => {
    getPokemons()
  }, [currentPageURL])

  const getPokemons = async () => {
    const response = await fetch(currentPageURL)
    const data = await response.json()
    console.log(data)
    setPokemons(data.results)
    setNextPageURL(data.next)
    setPrevPageURL(data.previous)
  }

  function nextPage() {
    setCurrentPageURL(nextPageURL)
    setPageNum(prev => prev + 1)
    setPokePage(prev => prev + 20)
  }

  function prevPage() {
    setCurrentPageURL(prevPageURL)
    setPageNum(prev => prev - 1)
    setPokePage(prev => prev - 20)
  }

  return (
    <div className="App">
      <Page nextPage={nextPageURL ? nextPage : null}
        prevPage={prevPageURL ? prevPage : null} />
      <p className='page-num'> Page: {pageNum}</p>
      <p className='poke-page'> Displaying Pokemon with ids: {pokePage} - {pokePage + 19}</p>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
