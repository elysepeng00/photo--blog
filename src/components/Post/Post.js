import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        {/* <img className="image" src={props.image}/> */}
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default post;