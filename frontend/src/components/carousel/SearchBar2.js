import React, { useState, useEffect } from 'react'



export default function Searchbar2() {
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    function onSubmit(e) {
        e.preventDefault();
        setQuery(search);
        console.log(search);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://127.0.0.1:8000/images?tag=${query}`);
                const json = await response.json();
                console.log({ json });
                setResults(
                    json.map(item => {
                        return item.id;
                    })
                )
            } catch (error) { }
        }

        if (query !== '') {
            fetchData();
        }
    }, [query])


    return (
        <div>
            <h1>Search</h1>
            <form onSubmit={onSubmit}>
                <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search tags.."
                />
                <button type="submit">Search</button>
            </form>
            <br />
            {results.map(item => {

                <img key={item} src={`http://localhost:8000/images/${item}.jpeg`}
                    alt="img-result" />
                console.log(`http://localhost:8000/images/${item}.jpeg`);
            }
            )}
        </div>
    );
}
