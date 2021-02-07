import { Typography, Chip, Avatar, InputBase } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineNumber } from "react-icons/ai";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import './SearchBar2.css';
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Slider from 'react-slick';
import LinearProgress from '@material-ui/core/LinearProgress';
import MatchBar from './MatchBar';

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

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));



export default function Searchbar2() {

    {/*This is the const for Searchbar */ }

    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [open, setOpen] = React.useState(false);

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



    {/*this is the const for modal*/ }
    const classes = useStyles();
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                                        <img
                                            key={item.id} src={`http://localhost:8000/images/${item.id}.jpeg`}
                                            alt="img-result"
                                            onClick={handleOpen} />

                                        {/*This is the Modal start*/}

                                    </div>
                                    <div>
                                        <Modal
                                            aria-labelledby="transition-modal-title"
                                            aria-describedby="transition-modal-description"
                                            className={classes.modal}
                                            open={open}
                                            onClose={handleClose}
                                            closeAfterTransition
                                            BackdropComponent={Backdrop}
                                            BackdropProps={{
                                                timeout: 500,
                                            }}
                                        >
                                            <Fade in={open}>
                                                <div className={classes.paper}>
                                                    <img
                                                        key={item.tags.id} src={`http://localhost:8000/images/${item.id}.jpeg`}
                                                        alt="img-modal"
                                                        style={{
                                                            width: "50em",
                                                            maxWidth: "100%"
                                                        }} />
                                                </div>
                                            </Fade>
                                        </Modal>
                                    </div>

                                    {/*This is the Modal end*/}


                                    <div>
                                        <Typography variant="h6" component="p" className="caption-wrap">
                                            <i>"{item.caption}"</i>
                                        </Typography>
                                    </div>

                                    <div className="mtag-wrap">
                                        <Typography className="mtag-label">
                                            Migr-ai-tion Tags:
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
                                        {item.tags.map(posttag => {
                                            console.log(posttag.tag);
                                            return (
                                                <Chip className="chip2" style={{ color: "#668389" }} avatar={<Avatar style={{ background: "#668389" }}><AiOutlineNumber style={{ color: "white" }} /></Avatar>} key={posttag.id} label={posttag.tag} component="a" href="#chip" clickable />
                                            )
                                        })}
                                    </div>
                                    <div>
                                        <MatchBar match={60} />
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
