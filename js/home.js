const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
      // Fetches the  next launch API
fetch("https://api.spacexdata.com/v3/launches/upcoming")
.then(res => res.json())
.then((res) => {
     for( var i=0 ; i<res.length ;i++){
       let launchDate = new Date(res[i].launch_date_local);
       let now = new Date();

       if(launchDate > now) {
        x = setInterval(function() {    
    
          let now = new Date().getTime(),
              distance = launchDate - now;
    
            document.getElementById('days').innerText = Math.floor(distance / (day)) + "d",
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)) + "h",
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)) + "m",
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second) + "s";
    
        }, second);
        break;
       }
    }
     
     
    nextLaunch(res);
})
.catch(err => console.log(err));

// mer info for next lunch
function nextLaunch(res){
  const launch = document.querySelector(".next-launch");
  for( var i=0 ; i<res.length ;i++){
    let launchDate = new Date(res[i].launch_date_local);
    let now = new Date();

    if(launchDate > now) {
      const missionName = res[i].mission_name;
      const flightNumber = res[i].flight_number;
      const roket = res[i].rocket.rocket_name;
      const details = res[i].details;
    
      launch.innerHTML += `<div class="lunch-text">
      <div>
      <h4>  ${missionName}</h4>
      <p> <strong>Flight Number: </strong> ${flightNumber }</p>
      <p> <strong>Rocket: </strong>${roket} </p >
      </div>
      <p>${details} </p>
      </div>`;
      break;
    }
  }
  

}
// mer info with onclick.red more

function myFunction() {
  var moreText = document.getElementById("next-launch");
  var btnText = document.getElementById("myBtn");
  var launchBack = document.getElementById("launch")
  if (moreText.style.display === "block") {
    moreText.style.display = "none"
    btnText.innerHTML = "Read more";
    btnText.style.backgroundColor = "#ffd04f ";
    launchBack.style.backgroundColor ="#2c2d2d82";


  } else {
    moreText.style.display = "block";
    btnText.innerHTML = "Read less";
    btnText.style.border = " 5px solid #ffd04f ";
    btnText.style.backgroundColor = "#fff";
    launchBack.style.backgroundColor ="#161717f0";
   
  }
}