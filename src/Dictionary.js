import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("moonlight");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        //console.log(response.data[0]);
        setResults(response.data[0]);
    }
  
  function search () {
      let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        //console.log(apiURL);
        axios.get(apiURL).then(handleResponse);
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

    </div>
  );
  } else {
    load();
    return "Loading...";
  }

  
}