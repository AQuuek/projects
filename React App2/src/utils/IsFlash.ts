
export const ArrSuitRef = (arr: string[], flashArr: number[]) => {
    arr.map(suit => {
        if(suit === 'pic') {
            flashArr.push(1);
        }
        if(suit === 'cherv') {
            flashArr.push(2);
        }
        if(suit === 'bub') {
            flashArr.push(3);
        }
        if(suit === 'krest') {
            flashArr.push(4);
        }
    })
}

export const isFlash = (arr:number[]) => {
    let itemName: any[] = [];
    let itemNameMore: any[] = [];
    for(let i = 0; i < arr.length; i++) {
        itemName[i] = arr[i];
        if (arr[i] === 1) {
            itemName[i] = 'пиках';
        }
        else if (arr[i] === 2) {
            itemName[i] = 'червах';
        }
        else if (arr[i] === 3) {
            itemName[i] = 'бубнах';
        }
        else if (arr[i] === 4) {
            itemName[i] = 'крестях';
        }
        itemNameMore.push(itemName[i])
    }
    return itemNameMore
}