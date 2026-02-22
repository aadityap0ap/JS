const nameElement = document.querySelector('.name-tag');
const nameInput = document.querySelector('.name');
const ageElement = document.querySelector('.age-tag');
const ageInput = document.querySelector('.age');

// //nameElement.innertText = localStorage.myName;
// nameElement.innerText = localStorage.getItem('myName')

// nameInput.addEventListener('input',(e) =>{
//    // localStorage.myName = e.target.value;
//    localStorage.setItem('myName',e.target.value);
//     //nameElement.innerText = localStorage.myName;
//     nameElement.innerText = localStorage.getItem('myName')
// })

// ageElement.innerText = localStorage.getItem('myAge');

// ageInput.addEventListener('input',(e)=>{
//     localStorage.setItem('myAge',e.target.value);
//     ageElement.innerText = localStorage.getItem('myAge');
// })
//by doing this way it will make blak the one input boc while we are filling the other one
// const myData = {
//     name : "",
//     age : ""
// }

//the other way to is to use the data availble in local storage and if no data is availble then use empty string
const myData = JSON.parse(localStorage.getItem('myData')) || {};

// //now when if there will be no data in local storge it will print undefined..so to overcome this ..and we dinot want it to print undefined..we want it to return or print empty object we are passing above
// if(myData.name){
//     nameElement.innerText = myData.name;
// }
// if(myData.age){
//     ageElement.innerText = myData.age;
// }


// //every time when we will refresh the page the data will vanish as we are refreshing the page
// //so if we want that the last stored data in local storage shows up every time we are refresing the page
// nameElement.innerText = myData.name;
// ageElement.innerText = myData.age;

//both the above things can combinedly written as
nameElement.innerText = myData.name || "";
ageElement.innerText = myData.age || "";

nameInput.addEventListener('input',(e) => {
    myData.name = e.target.value;
    localStorage.setItem('myData',JSON.stringify(myData));
     nameElement.innerText =  e.target.value;
})

ageInput.addEventListener('input',(e) => {
    myData.age = e.target.value;
    localStorage.setItem('myData',JSON.stringify(myData));
    ageElement.innerText = e.target.value;
})

