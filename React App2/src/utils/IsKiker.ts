import {getMaxOfArray} from "./utils";

export const isKiker = (arr:number[]) => {
    let kiker = getMaxOfArray(arr);

    const isImgKiker = (num: number) => {
        let itemName: any;
        itemName = num;
        if (num === 11) {
            itemName = 'валет';
        } else if (num === 12) {
            itemName = 'дама';
        } else if (num === 13) {
            itemName = 'король';
        } else if (num === 14) {
            itemName = 'туз';
        }
        return itemName
    }
    return isImgKiker(kiker)
}