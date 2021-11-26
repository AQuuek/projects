import React from 'react';
import {ICard} from "../types/types";

interface CardProps {
    card: ICard;
}

const Card = (props: CardProps) => {
    return (
        <div className="card">
            <div key={props.card.id} className={props.card.class}></div>
            <div className="shirt"></div>
        </div>
    );
};

export default Card;