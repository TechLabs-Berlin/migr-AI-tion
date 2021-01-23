import React, { useState } from 'react'
import { Card, CardContent, CircularProgress, Grid, CardMedia, Typography, Toolbar, TextField } from '@material-ui/core';
import { CarouselData } from './CarouselData'
import { formatMs, makeStyles } from '@material-ui/core/styles';
import './Carodex.css';
import { AiOutlineSearch, AiFillCaretRight, AiFillCaretLeft, AiOutlineClose, AiOutlineNumber } from "react-icons/ai";
import axios from "axios";


const useStyles = makeStyles({
})




const Searchbar2 = ({ vals }) => {
    const classes = useStyles();
    const [ready, setReady] = useState(false);
    const [searchTerm, setSearchTerm] = useState('all');
    const [tagsList, setTagsList] = useState(false);
    const [image, setImage] = useState(false);

    const handleResponse = (response) => {
        console.log(response.data.list);
        setReady(true);
        setTagsList(response.data.list);
        setImage(`http://localhost:8000/images/${response.data.id}.jpeg`);
    }

    const handleSearch = (event) => {
        {/*      let apiKey = "#";  
        let apiUrl = `${searchTerm}  ${apiKey}`;
        axios.get(apiUrl).then{ handleResponse }; */ }
    }

    const submitSearch = (event) => {
        setSearchTerm(event.target.value);
        console.log(event.target.value);
    }


    return (
        <div>
            <form onSubmit={submitSearch}>
                <div>
                    <Toolbar style={{ display: 'flex', paddingTop: '10%', }}>
                        <div className={classes.searchCont}>
                            <AiOutlineSearch className={classes.searchIcon} />
                            <TextField
                                id="filled-full-width" className={classes.searchTextfield}
                                placeholder="search.."
                                onChange={handleSearch} />
                        </div>
                    </Toolbar>
                </div>
            </form>


            { ready && (<div className='user' key={key}>
                <ul>
                    <li> <span>{tagsList}</span></li>
                    <li> <img src={image} /></li>
                </ul>
            </div>)}
        </div>
    );
}





export default Searchbar2;