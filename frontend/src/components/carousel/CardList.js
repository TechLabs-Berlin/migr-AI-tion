import React from 'react'
import Card2 from './Card2'

export default function CardList({ results }) {
    let data = [];
    if (results.data) {
        console.log(results.data)
        data = results.data || [];
    }
    // console.log(data)
    return (
        <div className="result">
            {data.map((item) => (
                <Card2 key={item.id} post={item} />
            ))}

        </div>
    )
}
