import {ICard} from "../types/types";

export const isFlashRoyal = (arr:ICard[]) => {

    const searchRoyalFlash = (suit:string, royalArr: ICard[]) => {
        arr.map(card => {
            for (let i = 10; i < 15; i++) {
                if(card.value === i && card.suit === suit) {
                    royalArr.push(card)
                }
            }
        })
    }

    let flashRoyal: string[] = [];

    let picFlashRoyal: ICard[] = [];
    searchRoyalFlash('pic', picFlashRoyal)
    if(picFlashRoyal.length > 4) {
        flashRoyal.push('флеш рояль на пиках')
    }

    let chervFlashRoyal: ICard[] = [];
    searchRoyalFlash('cherv', chervFlashRoyal)
    if(chervFlashRoyal.length > 4) {
        flashRoyal.push('флеш рояль на червах')
    }

    let bubFlashRoyal: ICard[] = [];
    searchRoyalFlash('bub', bubFlashRoyal)
    if(bubFlashRoyal.length > 4) {
        flashRoyal.push('флеш рояль на бубнах');
    }

    let krestFlashRoyal: ICard[] = [];
    searchRoyalFlash('krest', krestFlashRoyal)
    if(krestFlashRoyal.length > 4) {
        flashRoyal.push('флеш рояль на крестях');
    }

    return flashRoyal
}