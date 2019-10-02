import React from 'react';

const Card = props => {
    return (
        <div className='card'>
            <img src={props.image}/>
            <div className='card-info'>
                <h3 className='name'>{props.name}</h3>
                <p className='username'>{props.username}</p>
                <p>Location: {props.location}</p>
                <p>
                    <a>{props.url}</a>
                </p>
                <p>{props.followers}</p>
                <p>{props.following}</p>
                <p>{props.bio}</p>
            </div>
        </div>
    )
}

export default Card;