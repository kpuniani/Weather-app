const request =require('request');

var geocodeAdress= (address,callback) =>{
var result= encodeURIComponent(address);
request({url:`https://maps.googleapis.com/maps/api/geocode/json?address=${result}`,
json:true
},(error,responce,body)=>{
  if(error){
    callback('unable to connect to google servers');
  }
  else if (body.status==="ZERO_RESULTS"){
    callback('unable to find that address');
  }
  else if (body.status==='OK'){
    callback(undefined,{
      address:body.results[0].formatted_address,
      Latitude:body.results[0].geometry.location.lat,
      Longitude:body.results[0].geometry.location.lng


    })

  }

})
};
module.exports={
geocodeAdress
};
