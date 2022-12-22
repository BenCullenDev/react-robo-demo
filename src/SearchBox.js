import React from "react";

const SearchBox = ({ onSearchChange }) => {
    return (
        <div className="pa2">
            <input type="search" placeholder="Search for a Robot" className="pa3 ba b--green bg-lightest-blue" onChange={onSearchChange}></input>
        </div>
        
    )
}

export default SearchBox;