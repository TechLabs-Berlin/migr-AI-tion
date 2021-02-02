import { Card, CardContent, Typography, Chip, Avatar } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineNumber } from "react-icons/ai";



export default function Searchbar2() {

    {/*This is the const for Searchbar */ }

    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    function onSubmit(e) {
        e.preventDefault();
        setQuery(search);
        console.log(search);
    }

    function onSearch(e) {
        setSearch(e.target.value);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://127.0.0.1:8000/images?tag=${query}`);
                const json = await response.json();
                console.log({ json });
                setResults(
                    json
                )
            } catch (error) { }
        }

        if (query !== '') {
            fetchData();
        }
    }, [query])

    {/*This is the const for Carousel */ }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    {/*this is the searchbar part trial*/ }

    return (
        <div>
            <h1>Search</h1>
            <form onSubmit={onSubmit}>
                <input
                    value={search}
                    onChange={onSearch}
                    placeholder="Search tags.."
                />
                <button type="submit">Search</button>
            </form>

            {/*This is the Carousel part*/}

            <div>
                <Slider {...settings} style={{
                    margin: "20px 20px"
                }}>
                    {results.map((item) => (
                        <Card key={item.id} style={{
                            overflow: "hidden",
                            width: "500px",
                            height: "500px"
                        }}
                        >
                            <img
                                style={{
                                    width: "500px",
                                    height: "500px",
                                    margin: "auto"
                                }}
                                key={item.id} src={`http://localhost:8000/images/${item.id}.jpeg`}
                                alt="img-result" />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {item.caption}
                                </Typography>
                                {item.tags.map(posttag => {
                                    console.log(posttag.tag);
                                    return (
                                        <Chip avatar={<Avatar><AiOutlineNumber /></Avatar>} key={posttag.id} label={posttag.tag} component="a" href="#chip" clickable />
                                    )
                                })}
                            </CardContent>
                        </Card>)
                    )}
                </Slider>
            </div>
        </div>
    );
}
