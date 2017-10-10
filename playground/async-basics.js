console.log('Strating the app');
setTimeout(()=>{
  console.log('Inside of callback');
},20000);


setTimeout(()=>{
  console.log('Second');
},10000);

console.log('Finishing up');
