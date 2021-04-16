import React, {useState} from "react";

export default function Dictionary() {
    const [keyword, setKeyword] = useState(null);

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`);
    }

    function handleKeywordChange(event) {
        //console.log(event.target.value);
        setKeyword(event.target.value);
    }

    return (
        <div className="card">
            <form onSubmit={search}>
                <input onChange={handleKeywordChange} type="search" placeholder="Which word are you looking for?"></input>
                <input type="submit" placeholder="Search"></input>
            </form>
        </div>
    )
}