
export const matchSearch = (inputArray: number[],outputArray: number[], numOfMatch: number) => {
    let ks:number[] = [];
    for(let value of inputArray){
        ks[value] = (ks[value]||0)+1;
    }

    for(let i in inputArray) {
        if (ks[inputArray[i]] > numOfMatch) {
            outputArray.push(inputArray[i]);
            ks[inputArray[i]] = 0;
        }
    }
}