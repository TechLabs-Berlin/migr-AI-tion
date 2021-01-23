import React, { useState } from 'react'
import CardList from '../components/carousel/CardList';
import SearchBar from '../components/carousel/SearchBar';
import ApiSource from './../api/ApiSource';


function Gallery() {
  const [state, setState] = useState({
    results: []
  });

  const onSearch = async (text) => {
    const results = await ApiSource.get("/", {
      params: { s: text, i: "tt3896198", apiKey: "9f1fc37b" }
    })
    setState(prevState => {
      return { ...prevState, results: results }

    })
  }


  return (
    <div>
      <div className="container searchApp">
        <h2 className="title">
          Search Image
        </h2>
        <SearchBar onSearch={onSearch} />

        <CardList results={state.results} />
      </div>
    </div>
  )
}

export default Gallery;