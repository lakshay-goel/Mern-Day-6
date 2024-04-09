// function sum(a,b){
//     console.log(a+b);
// }
// sum(23,3);


// const figlet = require("figlet");
// figlet('Hello! Everyone',(err,data)=>{
//     console.log(data);
// });
// fetch('https.//api.github.com/user/lakshay-goel')
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log('Error Occurred')
// })
// console.log()

// async await

async function getApi(){
    const pr = await fetch('https.//api.github.com/user/lakshay-goel');
    const data = await pr.json();
    console.log(data);
}
getApi();



