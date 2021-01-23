import { Card, Typography } from '@material-ui/core'
import React from 'react'

function Card2(props) {
    const { movie } = props;
    return (
        <div className="resultCard">
            <Card>
                <img src={movie.Poster} alt={movie.Title} />
                <Typography>{movie.Title}</Typography>
                <span>{movie.Year}</span>
            </Card>
        </div>
    )
}

export default Card2;