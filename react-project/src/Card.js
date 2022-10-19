import React from 'react';

const Card = ({ name, id, email }) => {
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    )
}

export default Card;