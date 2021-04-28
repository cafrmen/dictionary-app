import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("moonlight");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        //console.log(response.data[0]);
        setResults(response.data[0]);
    }
  
  function handlePexelsResponse(response) {
    //console.log(response.data);
    setPhotos(response.data.photos);
  }
  
  function search() {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    //console.log(apiURL);
    axios.get(apiURL).then(handleResponse);
    
    let pexelsApiKey = "563492ad6f917000010000017e0467333613477eb4752341f849df31"
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios.get(pexelsApiUrl, { headers: { "Authorization": `Bearer ${pexelsApiKey}` } }).then(handlePexelsResponse);
    }

    function handleSubmit(event) {
      event.preventDefault();
      search();
        //alert(`Searching for ${keyword}`);
    }

    function handleKeywordChange(event) {
        //console.log(event.target.value);
        setKeyword(event.target.value);
    }
  
  function load() {
    setLoaded(true);
    search();
    }
  
  if (loaded) {
  return (
    <div className="Dictionary">

      <section>
      <h3>Which word do you want to look up?</h3>

      
        <form onSubmit={ handleSubmit }>
          <input className="typeInput" onChange={ handleKeywordChange } type="search" placeholder="moonlight"></input>
        </form>
      </section>

      <Results results={ results } />
      <Photos photos={ photos }/>

    </div>
  );
  } else {
    load();
    return "Loading...";
  }

  
}