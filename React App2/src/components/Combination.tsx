import React from 'react';
import {ICard} from "../types/types";
import {isImg, isImgElem} from "../utils/IsImg";
import {ArrSuitRef, isFlash} from "../utils/IsFlash";
import {matchSearch} from "../utils/matchSearch";
import {isStreet} from "../utils/IsStreet";
import {IsStreetFlash} from "../utils/IsStreetFlash";
import {isFlashRoyal} from "../utils/IsFlashRoyal";
import {getMaxOfArray, getMinOfArray} from "../utils/utils";
import {isKiker} from "../utils/IsKiker";


interface CombinationProps {
    arrayComb: ICard[];
}

const Combination = (props: CombinationProps ) => {

    let ArrValue: number[] = [];
    props.arrayComb.map(num =>
        ArrValue.push(num.value))

    let ArrSuit: string[] =[]
    props.arrayComb.map(suit =>
        ArrSuit.push(suit.suit))

    let kiker: number | string = isKiker(ArrValue)

    let couple: number[] = [];
    matchSearch(ArrValue, couple, 1);
    if (couple.length == 3) {
        let minCouple = getMinOfArray(couple)
        let index = couple.indexOf(minCouple)
        couple.splice(index, 1)
    }

    let set: number[] = [];
    matchSearch(ArrValue, set, 2)

    let kare: number[] = [];
    matchSearch(ArrValue, kare, 3)

    let fullHouse: number[] =[];
    const isFullHouse = () => {
        if(set.length && couple.length && set[0] != couple[0]) {
            fullHouse.push(set[0])
            fullHouse.push(couple[0])
        }
    }
    isFullHouse()


    let FlashArr: number[] =[];
    ArrSuitRef(ArrSuit, FlashArr)

    let flash: number[] = [];
    matchSearch(FlashArr, flash, 4)


    let street: any[] = []
    let olderStreet: any[] | undefined = isStreet(ArrValue) || undefined

    const sortStreet = () => {
        if (olderStreet != undefined) {
            let min = isImgElem(getMinOfArray(olderStreet[0]))
            let max = isImgElem(getMaxOfArray(olderStreet[0]))
            let result = 'стрит от ' + min + ' до ' + max;
            street.push(result)
        }
    }

    if(olderStreet != undefined){
        sortStreet()
    }

    let streetFlash: any[] | undefined;

    if (olderStreet != undefined) {
        streetFlash = IsStreetFlash(props.arrayComb, olderStreet);
    }


    return (
        <div className="comb-panel">
            {isFlashRoyal(props.arrayComb).length
                ? isFlashRoyal(props.arrayComb)
                : "ничего нет"
                &&
                    streetFlash?.length
                ? 'стритфлеш на ' + streetFlash
                : "ничего нет"
                &&
                    kare.length
                ? 'каре ' + isImg(kare)
                : "ничего нет"
                &&
                    fullHouse.length
                ? 'фулхаус ' + isImg(fullHouse)
                : "ничего нет"
                &&
                    isFlash(flash).length
                ? 'флеш на ' + isFlash(flash)
                : "ничего нет"
                &&
                    street.length
                ?  street
                : "ничего нет"
                &&
                    set.length
                ?  'сет ' + isImg(set)
                : "ничего нет"
                &&
                    couple.length > 1
                ? 'две пары из ' + isImg([couple[0]]) + ' и ' +  isImg([couple[1]])
                : "ничего нет"
                &&
                    couple.length
                ? 'пара ' + isImg(couple)
                : "ничего нет"
                &&
                    kiker != -Infinity
                ? 'старшая карта ' + kiker
                : "ничего нет"
            }
        </div>

    );
};

export default Combination;