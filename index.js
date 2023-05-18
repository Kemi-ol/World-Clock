function changeDate(event) {
  let zone = event.target.value;
  let dateZone = moment.tz(zone).format("MMMM Do, YYYY");
  let city = document.querySelector("#los-angeles");
  let time = moment.tz(zone).format("HH:mm:ss");
  city.innerHTML = `<div class="city" id="los-angeles">
        <div>
<h2>${zone}</h2>
<div class="date" id="date">${dateZone}</div>
</div>
<div class="time" id="time">${time}<small>PM</small></div>
    </div>`;
}
let cityElement = document.querySelector("#city");
cityElement.addEventListener("change", changeDate);

setInterval(function(){
//los-angeles
let laDate = document.querySelector("#losDate");
let laTime = document.querySelector("#losTime");
laDate.innerHTML = moment.tz("America / Los_Angeles").format("MMMM Do, YYYY");
laTime.innerHTML = moment
  .tz("America / Los_Angeles")
  .format("HH:mm:ss [<small>]A[</small>]");

  //tokyo
let Tokyodate = document.querySelector("#tokyo-date");
let Tokyotime = document.querySelector("#tokyo-time");
Tokyodate.innerHTML = moment.tz("Asia/Tokyo").format("MMMM Do, YYYY");
Tokyotime.innerHTML = moment
  .tz("Asia/Tokyo")
  .format("HH:mm:ss [<small>]A[</small>]");
},1000);