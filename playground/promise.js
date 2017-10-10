var async= (a,b)=>{
return new Promise((resolve,reject)=>{
setTimeout(()=>{
if(typeof a==='number'&& typeof b ==='number'){
resolve(a+b);
}
else{
  reject('Argument must be numbers');
}
},1500)
});
};


async(10,'2').then((msg)=>{
console.log(msg);
return async(msg,10);
}).then((message)=>{
console.log('hello',message);
}).catch((errorMessage)=>{
console.log(errorMessage);
});








/*var somePromise= new Promise((resolve,reject)=>{
setTimeout(()=>{
resolve('fill promises'),
2500
})

});


somePromise.then((message)=>{
console.log('success:' ,message);
},
(message)=>{
  console.log('Fail:' ,message);
});*/
