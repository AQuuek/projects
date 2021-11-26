import React, {FC, useState} from 'react';
import {ICard} from "../types/types";
import Combination from "./Combination";
import {getCards, moveCard, FlipCard} from "../utils/utils";
import Card from "./Card";

const Cards:FC = () => {

    const [hand, setHand] = useState<ICard[]>([])
    const [flop, setFlop] = useState<ICard[]>([])
    const [turn, setTurn] = useState<ICard[]>([])
    const [river, setRiver] = useState<ICard[]>([])
    const [comb, setComb] = useState<ICard[]>([])

    const getHand = (e: React.MouseEvent<HTMLButtonElement>) => {
        let twoCard: ICard[] = [];
        getCards(twoCard, 2)

        setHand(twoCard)
        comb.push(twoCard[0])
        comb.push(twoCard[1])

        moveCard('.moveAnimateHand', 0, 120)
        setTimeout(FlipCard,  1000, 2)
    }


    const getFlop = (e: React.MouseEvent<HTMLButtonElement>) => {
        let threeCards: ICard[] = [];
        getCards(threeCards, 3)

        setFlop(threeCards)
        comb.push(threeCards[0])
        comb.push(threeCards[1])
        comb.push(threeCards[2])

        moveCard('.moveAnimateFlop', 380, 740)
        setTimeout(FlipCard,  1000, 3)
    }


    const getTurn = (e: React.MouseEvent<HTMLButtonElement>) => {
        let turn: ICard[] = [];
        getCards(turn, 1)

        setTurn(turn);
        setComb([...comb, turn[0]])

        moveCard('.moveAnimateTurn', 380, 980)
        setTimeout(FlipCard,  1000, 4)
    }


    const getRiver = (e: React.MouseEvent<HTMLButtonElement>) => {
        let river: ICard[] = [];
        getCards(river, 1)

        setRiver(river)
        setComb([...comb, river[0]])

        moveCard('.moveAnimateRiver', 380, 1060)
        setTimeout(FlipCard,  1000, 5)
    }

    const reload = (e: React.MouseEvent<HTMLButtonElement>) => {
        window.location.reload()
    }


    return (
        <div>
            <Combination arrayComb={comb}/>
            <div className="tableCards">
                <div className="moveAnimateFlop">
                    {flop.map((card: ICard) =>
                        <Card card={card}/>
                    )}
                </div>
                <div className="moveAnimateTurn">
                    {turn.map((card: ICard) =>
                        <Card card={card}/>
                    )}
                </div>
                <div className="moveAnimateRiver">
                    {river.map((card: ICard) =>
                        <Card card={card}/>
                    )}
                </div>
            </div>
            <div className="hand">
                <div className="admin-img"></div>
                <div className="moveAnimateHand">
                    {hand.map((card: ICard) =>
                        <Card card={card}/>
                    )}
                </div>
            </div>
            <div className="control-panel">
                <button className="hand-out" onClick={getHand}>
                    Раздать карты
                </button>
                <button className="hand-out" onClick={getFlop}>
                    Выложить flop
                </button>
                <button className="hand-out" onClick={getTurn}>
                    Выложить turn
                </button>
                <button className="hand-out" onClick={getRiver}>
                    Выложить river
                </button>
                <button className="hand-out" onClick={reload}>
                    Следующая раздача
                </button>
            </div>
        </div>
    );
};

export default Cards;