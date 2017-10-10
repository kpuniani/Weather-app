var request =require('request');
//0648c948a6479d998e19d094645e8eff

var getWeather=(lat,lng,callback) =>{
request({url:`https://api.darksky.net/forecast/0648c948a6479d998e19d094645e8eff/${lat},${lng}`,
json:true
},(error,responce,body)=>{
if(error) {
  callback("unable to fetch weather");
  }
  else if(responce.statusCode===400){
    callback("unable to fetch weather");
  }
else if(responce.statusCode===200){
  callback(undefined,{
  temp : body.currently.temperature,
  actualTemp:body.currently.apparentTemperature
})

}
})


}

module.exports={
getWeather
};
