//in map even if we are not returnning any thing it will not return undefined instead it will return an array containing undefined equal to the numbver of element in the array
const months = ['Jan','Feb','March','April','May','June','July','August','Sep','Oct','Nov','Dec'];
// months.map((month) => {
//     console.log(month);
// })
// months.map((month) => {
//     console.log(month)
// })
// VM486:2 Jan
// VM486:2 Feb
// VM486:2 March
// VM486:2 April
// VM486:2 May
// VM486:2 June
// VM486:2 July
// VM486:2 August
// VM486:2 Sep
// VM486:2 Oct
// VM486:2 Nov
// VM486:2 Dec
// (12) [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

// months.map((month) =>{
//     console.log(month)
//     return month.toUpperCase()
// })
           
// VM1309:2 Jan
// VM1309:2 Feb
// VM1309:2 March
// VM1309:2 April
// VM1309:2 May
// VM1309:2 June
// VM1309:2 July
// VM1309:2 August
// VM1309:2 Sep
// VM1309:2 Oct
// VM1309:2 Nov
// VM1309:2 Dec
// (12) ['JAN', 'FEB', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEP', 'OCT', 'NOV', 'DEC']

//here we are passing three parameters index, month..these 2 are key value pairs stored in the array months..the third paramter we pass will give us the return value of this function

// const CapitalMonths = months.map((month,index,array) => {
//     //console.log(index,month);
//     console.log(array);
//     return month.toUpperCase();
// }) 

//****************************************************************************************** */

//filter
//the return type of this filter depends on 2 values one is true and other is false
//it will push the value into the array which holds true and it will skip the values which holds falsey value

// const filteredMonths = months.filter((month,index,array) => {
//     console.log(index,month)
//     return false;
// })

//now we will look for an example 
//through filter function we want to return the months of size(the no of character used for the particular months) less than or equal to 3

// const filteredMonths = months.filter((month,index,array) => {
//     return month.length <= 3;
// })
//op
// filteredMonths
// (7) ['Jan', 'Feb', 'May', 'Sep', 'Oct', 'Nov', 'Dec']

// const filteredMonths = months.filter((month,index,array) => {
//     return month[0] === 'M' || month[0] === 'm';
// })
//op
// filteredMonths
// (2) ['March', 'May']

//filter the students who are equal or above 18

// const students = [
//     {
//         name : 'Aditya',
//         age : 19
//     },
//      {
//         name : 'Shubham',
//         age : 25
//     },
//      {
//         name : 'Shivam',
//         age : 22
//     },
//      {
//         name : 'Kunal',
//         age : 32
//     },
//      {
//         name : 'Prashant',
//         age : 29
//     },
//      {
//         name : 'Sushant',
//         age : 28
//     }
// ]

// const MatureStudents = students.filter((student) => {
//     return student.age >= 25;
// })
// console.log(MatureStudents);
//op
// [
//   { name: 'Shubham', age: 25 },
//   { name: 'Kunal', age: 32 },
//   { name: 'Prashant', age: 29 },
//   { name: 'Sushant', age: 28 }
// ]

//now instead of storing the filtered students date in MatureStudents..we can simply apply a map on the the filter
//chainig of array methods

// students.filter((student) => {
//     return student.age >= 25;
// }).map((student) => {
//     return student.name;
// })
//op
// (4) ['Shubham', 'Kunal', 'Prashant', 'Sushant']
// 0: "Shubham"
// 1: "Kunal"
// 2: "Prashant"
// 3: "Sushant"
// length: 4
// [[Prototype]]: Array(0)

//************************************************************************************* */


