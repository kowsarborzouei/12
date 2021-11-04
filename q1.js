function nearestVowel(char){
    let l = [97, 101, 105, 111, 117];
    let n = char.charCodeAt(0);
    let x = l.map(item => Math.abs(n - item))
    let minimum = Math.min(...x);
    return String.fromCharCode(l[x.indexOf(minimum)])
}

console.log(nearestVowel('s'))