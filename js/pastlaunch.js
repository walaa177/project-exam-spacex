// Fetches the  past launch API

fetch("https://api.spacexdata.com/v3/launches/past")
.then(res => res.json())
.then((res) => {
     pastLaunch(res);
    })
    .catch(err => console.log(err))

function pastLaunch(res){
    const pastLaunchRes= document.querySelector("#pastLaunchDiv");
    for ( var i=0 ; i < 10 ;i++){
        if(!res[i].details || !res[i].links.youtube_id) {
            continue;
        }
    const launchImg = res[i].links.mission_patch;
    const missionName = res[i].mission_name;
    const launchDate = res[i].launch_date_local;
    const details = res[i].details;
    const videoLink = res[i].links.youtube_id;
    const launchSite = res[i].launch_site.site_name;
    const siteNameLong = res[i].launch_site.site_name_long;
    const rocket = res[i].rocket.rocket_name;
    const rockettype =res[i].rocket.rocket_type;
    pastLaunchRes.innerHTML += `<div class="past-launch" >
               <div class="main-lunch-past" id="pastLaunch-${i}">
                     <div class="main-launch-img"> <img src=" ${launchImg}" alt="launchImg logo for past launch"></div>
                     <div class=" main-launch-info">
                           <h3> Misson name:<span>${missionName}</span></h3>
                           <h3>Launch date: <span>${launchDate}</h3>
                           <p> ${details}</p>
                     </div>
               </div>
                <div class="main-lunch-more-1">
                    <button onclick="myFunctionBtn(${i})" id="myBtn-${i}" class="main-lunch-more-button">Read more</button>
                </div>
                <div class="container-link" id="next-launch-${i}">
                    <div class="next-launch" >
                         <div><iframe  src="https://www.youtube.com/embed/${videoLink}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="iframe"></iframe></div>
                         <div class="iframe-div">
                             <span>Launch site: ${launchSite}</span>
                             <span>Site name long: ${siteNameLong}</span>
                             <span>Rocket: ${rocket}</span>
                             <span>Rocket type: ${rockettype}</span>
                         </div>
                        
                    </div>
                </div>
     </div>`;

    }
}

// mer info with onclick.red more

function myFunctionBtn(div) {
    var moreText = document.getElementById("next-launch-" + div);
    var btnText = document.getElementById("myBtn-" + div);
    var launchBack = document.getElementById("pastLaunch-"+ div)
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