const fruits = ['Gauava','Apple','Grapes','Kiwi','Papaya','Orange'];

fruits.forEach((fruit) =>{
    console.log(fruit);
}
)

console.log('..............................................');

//this way is not commonly used
function abc(el){
    console.log(el);
}
fruits.forEach(abc);