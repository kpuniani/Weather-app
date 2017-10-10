var request =require('request');

var geocodeAdress= (address)=>{
return new Promise((resolve,reject)=>{
  var result= encodeURIComponent(address);
  request({url:`https://maps.googleapis.com/maps/api/geocode/json?address=${result}`,
  json:true
  },(error,responce,body)=>{
  if(body.status==="OK"){
  resolve({
  address :body.results[0].formatted_address,
  Latitude:body.results[0].geometry.location.lat,
  Longtitude:body.results[0].geometry.location.lng
  });
    }
  else{
    reject(error);
  }
      });
  });
  };


geocodeAdress('90815').then((msg)=>{
console.log(JSON.stringify(msg,undefined,2));
},(errorMessage)=>{
console.log("error is there");
});
