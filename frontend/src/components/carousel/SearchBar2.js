import { Typography, Chip, Avatar, InputBase } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineNumber } from "react-icons/ai";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import './SearchBar2.css';
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Slider from 'react-slick';
import MatchBar from './MatchBar';
import ImageModal from './ImageModal';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#9611FF",
        },
        secondary: {
            main: "#668389",
        },
    },
});


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

    const settings = {
        dots: true,
        className: "center",
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    {/*this is the searchbar return part*/ }

    return (
        <div className="all">
            <div className="paperwrapper-searchbar">
                <form component="form" onSubmit={onSubmit} className="searchbar-paper">
                    <IconButton
                        type="submit"
                        aria-label="search"
                        style={{ paddingRight: "0.3em", paddingLeft: "0.5em" }}>
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
                </form>
            </div>

            {/*This is the Carousel part*/}

            <div>
                <ThemeProvider theme={theme}>
                    <Slider {...settings} className="slickslider">
                        {results.map((item) => (
                            <div>
                                <div key={item.id} className="paper-slider">
                                    <div className="img-wrapper">
                                        <ImageModal identifier={item.id} />
                                    </div>
                                    <div>
                                        <Typography variant="h6" component="p" className="caption-wrap">
                                            <i>"{item.caption}"</i>
                                        </Typography>
                                    </div>

                                    <div className="mtag-wrap">
                                        <Typography className="mtag-label">
                                            migr-AI-tion Tags:
                                            </Typography>
                                        {item.tags.map(posttag => {
                                            console.log(posttag.tag);
                                            return (
                                                <Chip className="chip1" avatar={<Avatar><AiOutlineNumber /></Avatar>} key={posttag.id} label={posttag.tag} component="a" href="#chip" variant="outlined" color="primary" clickable />
                                            )
                                        })}
                                    </div>
                                    <div className="ntag-wrap">
                                        <Typography className="ntag-label">
                                            Image_Net Tags:</Typography>

                                        {/* this is a pre-code for ai_tags
                                        {item.ai_tags.map(posttag => {
                                            console.log(posttag.tag);
                                            return (
                                                <Chip className="chip2" style={{ color: "#668389" }} avatar={<Avatar style={{ background: "#668389" }}><AiOutlineNumber style={{ color: "white" }} /></Avatar>} key={posttag.id} label={posttag.tag} component="a" href="#chip" clickable />
                                            )
                                        })}
                                        */}

                                        {item.tags.map(posttag => {
                                            console.log(posttag.tag);
                                            return (
                                                <Chip className="chip2" style={{ color: "#668389" }} avatar={<Avatar style={{ background: "#668389" }}><AiOutlineNumber style={{ color: "white" }} /></Avatar>} key={posttag.id} label={posttag.tag} component="a" href="#chip" clickable />
                                            )
                                        })}
                                    </div>
                                    <div>
                                        <MatchBar match={60} aitag={'tradition'} />
                                        <MatchBar match={60} aitag={'tradition'} />
                                        <MatchBar match={60} aitag={'tradition'} />

                                        {/*  this is a pre-code for MatchBar     
                                        {item.ai_tags.map(aiitem => {
                                            return (
                                                <MatchBar match={aiitem.confidence} aitag={aiitem.tag}>
                                            )
                                        })}
                                        */}

                                    </div>


                                </div>
                            </div>)
                        )}
                    </Slider>
                </ThemeProvider>
            </div>

        </div>
    );
}
