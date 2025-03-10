function search() {
    var city =document.getElementById("search-city").value;
    var temp = document.getElementById("temp");
    var name = document.getElementById("name");
    var few_det = document.getElementById("few-det");
    var desc = document.getElementById("desc");
    
  async function getUser() { 
    var apiKey = "f451ea063aa1e215b37178d7bda33fb2";
  
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json(); 
    const mypromise = new Promise(function(resolve,reject){
        if(!response.ok){
            reject("Error ochindi")
        }
        else{
            resolve();
        }
    });
    mypromise.then(function(x){
      console.log(data);  
      console.log(data.weather[0].description);  
      console.log(`Temperature in ${city}: ${data.main.temp}`);
      temp.innerHTML = `<h1>${data.main.temp}°C</h1>`
      name.innerHTML = `<h1>${data.name}</h1>`
      few_det.innerHTML = `<h4>Pressure: ${data.main.pressure} &nbsp Humidity: ${data.main.humidity} &nbsp  Sea Level: ${data.main.sea_level}<h4>`;
      desc.innerHTML = `<h2>Description: ${data.weather[0].description}</h2>` 
    },
function(){
    console.log("hehehe")
});


    // try {
    //   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    //   }
  
      
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    // }
  }
  
  async function photo() { 
  
  
    try {
      const response = await fetch(`https://pixabay.com/api/?key=49252256-8c0623bc470d7a719b6d62c4c&q=${city}&image_type=photo&pretty=true`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json(); 
      console.log(data);  // Log full response
      // console.log(data.pageURL);
      document.getElementById("city-image").style.backgroundImage =  `url(${data.hits[0].previewURL})` // Log full response
     // Example: Log temperature
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  getUser();
  photo()
  }
  
  
  
  
