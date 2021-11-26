
export const isImg = (arr: number[]) => {
    let itemName: any[] = [];
    let itemNameMore: any[] = [];
    for(let i = 0; i < arr.length; i++) {
        itemName[i] = arr[i];
        if (arr[i] === 11) {
            itemName[i] = 'вальтов';
        }
        else if (arr[i] === 12) {
            itemName[i] = 'дам';
        }
        else if (arr[i] === 13) {
            itemName[i] = 'королей';
        }
        else if (arr[i] === 14) {
            itemName[i] = 'тузов';
        }
        itemNameMore.push(itemName[i])
    }
    return itemNameMore
}

export const isImgElem = (num: number) => {
    let itemName: any;
        itemName = num;
        if (num === 11) {
            itemName = 'вальтов';
        }
        else if (num === 12) {
            itemName = 'дам';
        }
        else if (num === 13) {
            itemName = 'королей';
        }
        else if (num === 14) {
            itemName = 'тузов';
        }


    return itemName
}