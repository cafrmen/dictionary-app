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
            <h5>Which word are you looking for?</h5>

            <form onSubmit={search}>
                <input className="typeInput" onChange={handleKeywordChange} type="search"></input>
            </form>
        </div>
    )
}