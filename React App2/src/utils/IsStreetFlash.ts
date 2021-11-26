import {ICard} from "../types/types";
import {ArrSuitRef, isFlash} from "./IsFlash";
import {matchSearch} from "./matchSearch";


export const IsStreetFlash = (arr:ICard[], arrStreet: number[]) => {

    let suitArr: string[] = [];
    let suitArrNum: number[] = [];

        arr.map(card => {
                for(let i = 0; i < arrStreet.length; i++) {
                    if (card.value === arrStreet[i]) {
                        suitArr.push(card.suit)
                    }
            }
        })

    ArrSuitRef(suitArr, suitArrNum)
    let flash: number[] = [];
    matchSearch(suitArrNum, flash, 4)
    let streetFlash: any = isFlash(flash);


    return streetFlash

}
