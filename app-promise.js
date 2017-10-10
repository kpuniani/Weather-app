const yargs= require('yargs');
const axios = require('axios');
const argv = yargs
  .options({
    a:{
      demand: true,
      alias:'Address',
      describe:'This is the address',
      string: true
    }
 })
 .help()
.alias('help', 'h')
 .argv;

 var result= encodeURIComponent(argv.Address);
 var geoCode =` https://maps.googleapis.com/maps/api/geocode/json?address=${result}`;
 axios.get(geoCode).then((response)=>{
   if(response.data.status==="ZERO_RESULTS"){
     throw new Error("unable to find the address")
   }
   var lat= response.data.results[0].geometry.location.lat;
   var lng=response.data.results[0].geometry.location.lng;
   console.log(`lat is ${lat}`);
   console.log(`lng is ${lng}`);
  var weatherResult=`https://api.darksky.net/forecast/0648c948a6479d998e19d094645e8eff/${lat},${lng}`;
console.log(response.data.results[0].formatted_address);
return axios.get(weatherResult);
}).then((response)=>{
var temp =response.data.currently.temperature;
var ApparentTemperature =response.data.currently.apparentTemperature;
console.log(`Current temp is ${temp}. It feels like ${ApparentTemperature}`);
}).catch((e)=>{
if(e.code==="ENOTFOUND"){
  console.log("unable to conect to API servers");
}
else{
  console.log(e.message);
}
 });
