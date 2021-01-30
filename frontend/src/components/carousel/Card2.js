import { Card, Typography } from '@material-ui/core'
import React from 'react'

function Card2(props) {
    const { post } = props;
    const returnImg = `http://127.0.0.1:8000/images/${post.id}.jpeg`
    return (
        <div className="resultCard">
            <Card>
                <img src={returnImg} alt={post.caption} />
                <Typography>{post.caption}</Typography>
                <span>{post.tags}</span>
            </Card>
        </div>
    )
}

export default Card2;