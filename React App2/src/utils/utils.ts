import {cards} from "./CardsArray";
import {ICard} from "../types/types";


export const moveCard = (divClass: string , top: number, left: number) => {
    const moveDiv = document.querySelector<HTMLElement>(divClass)!;
    moveDiv.style.top = top + 'px';
    moveDiv.style.left = left + 'px';
}

export const FlipCard = (arrLength: number) => {
    let  flipFrontCard = document.querySelectorAll<HTMLElement>('.shirt')!;
    let  flipBackCard = document.querySelectorAll<HTMLElement>('.cards')!;

    for (let i = 0; i < arrLength; i++) {
        flipFrontCard[i].style.transform = 'rotateY(180deg)';
        flipBackCard[i].style.transform = 'rotateY(360deg)';
    }
}

export const getCards = (cardsArr: ICard[], numCards: number) => {
    let random: number[] = [];
    for (let i = 0; i < numCards; i++) {
        random[i] = Math.floor(Math.random()*cards.length);
        cardsArr.push(cards[random[i]])
        cards.splice(random[i], 1)
    }
}

export const getMaxOfArray = (numArray: number[]) => {
    return Math.max.apply(null, numArray)
}

export const getMinOfArray = (numArray: number[]) => {
    return Math.min.apply(null, numArray)
}
