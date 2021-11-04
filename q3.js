function movingZeroes(arr){
    for (let i of arr){
        let index = arr.indexOf(0);
        arr.splice(index, 1);
        arr.push(0)
    }
    return arr;
}
console.log(movingZeroes([1,0,2,0,0,4,5,0]))