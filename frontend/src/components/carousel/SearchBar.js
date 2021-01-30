import React, { useState } from 'react'

function SearchBar(props) {
    const { onSearch } = props;

    const [searchText, setSearchText] = useState('');

    const handleInput = (e) => {
        const text = e.target.value
        setSearchText(text)
    }

    const handleEnterKeyPressed = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchText)
        }
    }

    return (
        <div>
            <div className="control">
                <input
                    className="input"
                    onChange={handleInput}
                    onKeyPress={handleEnterKeyPressed}
                    type="text"
                    value={searchText}
                    placeholder="Search image.." />
            </div>
        </div>
    )
}

export default SearchBar;