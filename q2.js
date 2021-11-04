let names= [
    { name: 'Ali', age: 21 },
    { name: 'Ahmad', age: 20 },
    { name: 'maryam', age: 20 }
];
function sorting(names){
    names.sort((a,b)=>{
        return a.age-b.age;
    }) ;
    names.forEach((e)=>{
        console.log(`${e.name} ${e.age}`);
    });
}
sorting(names)