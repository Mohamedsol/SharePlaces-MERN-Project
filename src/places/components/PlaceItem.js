import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import './PlaceItem.css'

const PlaceItem = props => {
    return <li className="plce-item">
        <Card>
        <div className="place-item__image">
            <img src={props.image} alt={props.title} />
        </div > 
        <div className="place-info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
        </div>
        <div className="place-ctions">
            <button>VIEW ON MAP</button>
            <button>Edit</button>
            <button>DELETE</button>
        </div>
        </Card>
    </li>
}
 
export default PlaceItem;