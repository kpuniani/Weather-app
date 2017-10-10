 const yargs= require('yargs');
 const geocode =require('./geocode/geocode');
 const weather =require('./weather/weather');
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
 geocode.geocodeAdress(argv.a,(error,result)=>{
 if(error){
 console.log(error);
}
 else {
   console.log(result.address);
   weather.getWeather(result.Latitude,result.Longitude,(error,weatherResult)=>{
     if(error){
     console.log(error);
     }
     else {
       console.log(`Current temp is :${weatherResult.temp} and actual temperature is ${weatherResult.actualTemp}`);
     }

   });
 }
 });
