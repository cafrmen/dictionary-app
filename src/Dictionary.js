import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
    const [keyword, setKeyword] = useState(null);

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        //alert(`Searching for ${keyword}`);

        let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        console.log(apiURL);
        axios.get(apiURL).then(handleResponse);
    }

    function handleKeywordChange(event) {
        //console.log(event.target.value);
        setKeyword(event.target.value);
    }

    return (
        <div className="card">
            <h5>Which word are you looking for?</h5>

            <form onSubmit={search}>
                <input className="typeInput" onChange={handleKeywordChange} type="search"></input>
            </form>
        </div>
    )
}