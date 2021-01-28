import { Card, Typography } from '@material-ui/core'
import React from 'react'

function Card2(props) {
    const { post } = props;
    {/*   const image = `http://127.0.0.1:8000/images?tag=` */ }
    return (
        <div className="resultCard">
            <Card>
                {/*   <img src={post.image} alt={movie.Title} /> */}
                <Typography>{post.tag}</Typography>
                <span>{post.id}</span>
            </Card>
        </div>
    )
}

export default Card2;