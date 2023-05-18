function changeDate(event) {
  let timeZone = event.target.value;
  if(timeZone=== "current"){
    timeZone= moment.tz.guess();
  }
  let cityName = timeZone.replace("_", " ").split("/")[1];
  let dateZone = moment.tz(timeZone).format("MMMM Do, YYYY");
  let city = document.querySelector("#cities");
  let time = moment.tz(timeZone).format("HH:mm:ss");
  city.innerHTML = `<div class="city" id="los-angeles">
        <div>
<h2>${cityName}</h2>
<div class="date" id="date">${dateZone}</div>
</div>                        
<div class="time" id="time">${time}<small>PM</small></div>
    </div> <a href="/">back to homepage</a>`;
}
let cityElement = document.querySelector("#city");
cityElement.addEventListener("change", changeDate);

setInterval(function () {
  //los-angeles
  let laDate = document.querySelector("#losDate");
  let laTime = document.querySelector("#losTime");
  if (laDate){
  laDate.innerHTML = moment.tz("America/Los_Angeles").format("MMMM Do, YYYY");
  laTime.innerHTML = moment.tz("America/Los_Angeles").format("HH:mm:ss[<small>]A[</small>]");
  }
  //london
  let londonDate = document.querySelector("#london-date");
  let londonTime = document.querySelector("#london-time");
  if(londonDate){
  londonDate.innerHTML = moment.tz("Europe/London").format("MMMM Do, YYYY");
  londonTime.innerHTML = moment
    .tz("Europe/London")
    .format("HH:mm:ss [<small>]A[</small>]");
}}, 1000);

