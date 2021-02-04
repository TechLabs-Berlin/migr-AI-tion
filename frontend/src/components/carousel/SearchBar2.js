import { Card, CardContent, Typography, Chip, Avatar, InputBase, Button, CardMedia } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineNumber } from "react-icons/ai";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import './SearchBar2.css';


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
            console.log("the data does not exist")
            fetchData();
        }
    }, [query])

    {/*This is the const for Carousel */ }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    {/*this is the searchbar part trial*/ }

    return (
        <div className="all">
            <Paper component="form" onSubmit={onSubmit} className="paper" style={{ borderRadius: "20px" }}>
                <IconButton type="submit" aria-label="search" style={{ paddingRight: "0.3em", paddingLeft: "0.5em" }}>
                    <SearchIcon className="search-icon" />
                </IconButton>
                <InputBase
                    value={search}
                    onChange={onSearch}
                    placeholder="Search tags.."
                    variant="outlined"
                    className="searchbar-input"
                    style={{ fontSize: "0.9em" }}
                />
            </Paper>

            {/*This is the Carousel part*/}

            <div>
                <Slider {...settings} className="slider">
                    {results.map((item) => (
                        <div>
                            <Paper key={item.id} className="paper2" style={{ borderRadius: "15px" }}>
                                <CardMedia>
                                    <img
                                        key={item.id} src={`http://localhost:8000/images/${item.id}.jpeg`}
                                        alt="img-result" />
                                </CardMedia>

                                <CardContent className="caption-card">
                                    <Typography variant="body2" component="p">
                                        {item.caption}
                                    </Typography>
                                </CardContent>
                                <CardContent className="tags-card"
                                    style={{ paddingBottom: "3%", paddingTop: "0" }}>
                                    <Typography>
                                        {item.tags.map(posttag => {
                                            console.log(posttag.tag);
                                            return (
                                                <Chip style={{ color: "#9611ff", borderColor: "#9611ff", margin: "0.2em" }} avatar={<Avatar style={{ background: "rgba(0, 0, 0, 0.26)" }}><AiOutlineNumber style={{ color: "white" }} /></Avatar>} key={posttag.id} label={posttag.tag} component="a" href="#chip" variant="outlined" clickable />
                                            )
                                        })}
                                    </Typography>
                                </CardContent>

                            </Paper>
                        </div>)
                    )}
                </Slider>
            </div>
        </div>
    );
}
