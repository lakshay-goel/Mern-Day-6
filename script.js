// // console.log('hello');

// const arr=[10,20,30];

// const ans=arr.map((a)=>{
//     console.log(a);
//     return a*2;
// });

// const ans2=arr.map(a=>a**2);
// console.log(ans);


// const arr=[10,20,3,4];
// const ans = arr.filter((a)=>{
//     if(a>20) return true;
//     else return false;
// })

// console.log(arr);
// console.log(ans);


const arr=[
    'DELHI',
    'MUMBAI',
    'CHENNAI',
    'JAMMU',
    'INDIA',
    'RUSSIA',
    'USA',
    'IRAQ',
    'TOKYO'
]
 const ans = arr.filter((s)=>{
    if(s.includes('I')){
        return true;
    }
    else false;
 });

 console.log(ans);