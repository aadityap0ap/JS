//Higher Order Function - A HOf is a function which takes a function as an argument(input) or returns a function as output or does both
// function a(b){
//    console.log(typeof(b));
//    console.log(b);
// }
// a("Hello");
// a({userName : 'Aditya' , userAge : 25});
// a([1,2,3,4]);

// //hof
// function a(b){
//    console.dir(b);
//    b();
// }


// //callback function
// a(function(){
//    console.log("HELLLLLOOOOOOO");
// })

console.log('Hii - 1');

function hello(){
   console.log('hii - 4');
}
for(let i = 0;i<4;i++){
   console.log('Hii - 2');
}
hello();

setTimeout(function(){
   console.log('Hello from setTimeout')
},3000);

console.log('hii - 3');

setTimeout(hello,1000);

console.log('Program Ended');