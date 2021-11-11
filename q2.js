let names = [
    {name: 'Ali', old: 21},
    {name: 'Ahmad', old: 20},
    {name: 'maryam', old: 20},
    {name: 'zahra', old: 21},
    {name: 'shima', old: 23},
];
let age='old'
function sorting(names) {
    let x = {}
    x =names.reduce(red,{})
    return x
}
function red(prevVel,currentVel){
    if(!prevVel[currentVel[age]]){
        prevVel[currentVel[age]]=[currentVel]
    }else
        prevVel[currentVel[age]].push(currentVel)
    return prevVel
}
console.log(sorting(names))