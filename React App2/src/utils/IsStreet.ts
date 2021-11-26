import {getMaxOfArray} from "./utils";

export const isStreet = (arr:number[]) => {
    let street1: number[] = [],
        street2: number[] = [],
        street3: number[] = [],
        street4: number[] = [],
        street5: number[] = [],
        street6: number[] = [],
        street7: number[] = [],
        street8: number[] = [],
        street9: number[] = [],
        street10: number[] = [],
        streetPul: any[] = [],
        olderStreet: any[] = [];



    arr.filter(el => {
        for(let i = 2; i < 6; i++) {
            if(el === 14 && !street1.includes(1)) {
                street1.push(1)
            }
            else if(el === i && !street1.includes(i)) {
                street1.push(i)
            }
        }
    })

    const searchStreet = (num1: number, num2: number, arr: number[], arrValue: number[]) => {
        arrValue.filter(el => {
            for(let i = num1; i < num2; i++) {
                if(el === i && !arr.includes(i)) {
                    arr.push(i)
                }
            }
        })
        if(arr.length > 4) {
            streetPul.push(arr)
        }
    }


    searchStreet(2, 7, street2, arr)
    searchStreet(3, 8, street3, arr)
    searchStreet(4, 9, street4, arr)
    searchStreet(5, 10, street5, arr)
    searchStreet(6, 11, street6, arr)
    searchStreet(7, 12, street7, arr)
    searchStreet(8, 13, street8, arr)
    searchStreet(9, 14, street9, arr)
    searchStreet(10, 15, street10, arr)


    const mainStreet = (arr1:any[], arr2:any[]) => {
        let item: number[] = [];

        for (let i = 0; i < arr1.length; i++) {
            item.push(getMaxOfArray(arr1[i]))
        }
        if(item[0] > item[1] && item[0] > item[2]) {
            arr2.push(arr1[0])
        }
        else if(item[1] > item[0] && item[1] > item[2]) {
            arr2.push(arr1[1])
        }
        else if(item[2] > item[0] && item[2] > item[0]) {
            arr2.push(arr1[2])
        }
    }

    mainStreet(streetPul,olderStreet)

    if(olderStreet.length) {
        return olderStreet
    }
}

