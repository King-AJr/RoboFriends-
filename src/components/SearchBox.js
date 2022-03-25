import React from "react";


const SearchBox = ({Searchfield, SearchChange}) => {
    return (
        <div className="pd2">
            <input 
            className="pa3 ba bg-lightest-blue"
            type="search"
             placeholder='search Robots'
             onChange={SearchChange}
             />
        </div>
    )
}
export default SearchBox