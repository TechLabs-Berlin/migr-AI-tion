import React, { useState } from 'react'
import axios from "axios";




const Searchbar2 = () => {
    const [ready, setReady] = useState(false);
    const [searchTerm, setSearchTerm] = useState(null);
    const [tagsList, setTagsList] = useState(false);
    const [image, setImage] = useState(false);

    const handleResponse = (response) => {
        console.log(response.data.list);
        setReady(true);
        setTagsList(response.data.list);
        setImage(`http://localhost:8000/images/${response.data.id}.jpeg`);
    }

    const handleSearch = () => {
        axios
            .get(`http://127.0.0.1:8000/images/${searchTerm}.jpeg`)
            .then(handleResponse);
    }

    const submitSearch = (event) => {
        setSearchTerm(event.target.value);
        console.log(event.target.value);
        handleSearch();
    }

    const handleEnterKeyPressed = (e) => {
        if (e.key === 'Enter') {
            submitSearch();
        }
    }



    return (
        <div>
            <form onSubmit={submitSearch}>
                <div>
                    <div className="control">
                        <input
                            className="input"
                            onChange={handleEnterKeyPressed}
                            type="text"
                            placeholder="Search image.." />
                    </div>
                    <div>
                        <input
                            type="Submit"
                            value="Search"
                        />
                    </div>
                </div>
            </form>


            { ready && (<div className='user'>
                <ul>
                    <li> <span>{tagsList}</span></li>
                    <li> <img src={image} alt="img" /></li>
                </ul>
            </div>)}
        </div>
    );
}





export default Searchbar2;