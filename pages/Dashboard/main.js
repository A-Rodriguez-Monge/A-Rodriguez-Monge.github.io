const weatherKey = 'L4pIXEET4FDlEYKkI9p0MXtbvLQngtqE';

window.addEventListener('load', ()=> {
   let long;
   let lat;


    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
           long = position.coords.longitude;
           lat = position.coords.latitude;

            var locationKey;
            let timeZone = document.querySelector('.location-timezone');
            let weatherIcon = document.getElementById("weatherIcon");
            let accuweatherLink = document.getElementById("accuweatherLink");
            let temp = document.querySelector('.temp-degrees');
            let tempUnits = document.getElementById("units");
            let tempDescription = document.querySelector('.temp-description');


            const proxy = "";//https://cors-anywhere.herokuapp.com/";
            const locationApi = `${proxy}http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${weatherKey}&q=${lat},${long}`;
            const weatherApi = `${proxy}http://dataservice.accuweather.com/currentconditions/v1/`;

            fetch(locationApi)
               .then(response => {
                   return response.json();
               })
                .then(location => {
                    locationKey = location.Key;
                    timeZone.textContent = location.LocalizedName;
                    fetch(weatherApi + `${locationKey}?apikey=${weatherKey}`)
                       .then(wResponse => {
                           return wResponse.json();
                       })
                       .then(weatherData => {

                           const curData = weatherData[0];
                           const tempData = curData.Temperature.Imperial;

                           console.log(curData);
                           accuweatherLink.setAttribute('href', curData.Link);
                           weatherIcon.src = "images/weather/" + curData.WeatherIcon + ".png";
                           temp.textContent = tempData.Value;
                           tempUnits.textContent = tempData.Unit;
                           tempDescription.textContent = curData.WeatherText;

                       });
                });
       });

   } else {
       h1.textContent = "Please enable geolocation"
   }
});

let clock = () => {
    let date = new Date();


    const days = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    let calendarDate = date.getDate();

    let period = "AM";

    if(hrs === 0) {
        hrs = 12;
    } else if(hrs >= 12) {
        hrs -= 12;
        period = "PM";
    }

    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    document.getElementById("time").innerText = `${hrs}:${mins}:${secs}`;
    document.getElementById("period").innerText = `${period}`;
    document.getElementById("date").innerText = `${day}, ${month} ${calendarDate}`;

    setInterval(clock, 1000);

}

clock();