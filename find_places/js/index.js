// SELECT ELEMENTS
const tempElement = document.querySelector(".temperature-value p")
const descriptionElement = document.querySelector(".temperature-description p")
const geolocationElement = document.getElementById('geolocation')

const owpKey = "d1317d8418f633367dfc223d1e98fecc";
const hereKey = "D2jvdrm5JeaeHfaRtKnibl9j_IqhwfE5PxvK45odmus";

var curLatitude;
var curLongitude;
var hours = 4;
var placesHTMLString = '';

const weather = {
    temperature: [],
    description: [],
    icon: []
};

const places = {};


$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault()
            var hash = this.hash
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            })
        }
    })
    $('#getButton').click(function () {
        document.getElementById('searchResult').style.display = 'block';
        getWeather();
    });
    $("#imprint").click(function () {
        $('#imprintmodal').modal({
            show: true,
            backdrop: 'static'
        })
    })
})

function setPosition(position) {
    curLatitude = position.coords.latitude;
    curLongitude = position.coords.longitude;
    getWeather(curLatitude,curLongitude);
}
function getPlaces() {
    let cat = $("input[type='radio']:checked").val();

    let w = weather.description[0];
    if (cat=='recommended') {
        if (w!='Thunderstorm' && w!='Drizzle' && w!='Rain')
            cat = 'natural-geographical';
        else cat = 'going-out';
    }
    emptyPlaces();
    fetchPlaces();
    function fetchPlaces() {
        let api = `https://places.ls.hereapi.com/places/v1/discover/around?` +
            `apiKey=${hereKey}&` +
            `in=${curLatitude},${curLongitude};r=3000&=mc&pretty` +
            `&q=asia&cat=${cat}&size=30`

        fetch(api).then(function (response) {
            let data = response.json();
            return data;
        }).then(function (data) {
            // document.getElementById('places').innerHTML = data.results.items[1].title;
            weather.city = data.search.context.location.address.city;
            weather.country = data.search.context.location.address.country;
            weather.street = data.search.context.location.address.street;
            weather.house = data.search.context.location.address.house;
            weather.postalCode = data.search.context.location.address.postalCode;
            places.location = data.search.context.location.address.text;
            places.items = data.results.items;
            places.address = `${weather.street} ${weather.house} ${weather.postalCode} ${weather.city}, ${weather.country}`
            console.log(data);
            $('#location').html(places.location);
        }).then(function () {
            addPlaces();
            displayPlaces()
        });
    }
}
function emptyPlaces() {
    placesHTMLString = ''
}
function addPlaces() {
    if(places.items.length==0) {

        placesHTMLString = '<div style="margin-top:20vh;font-size:40px;">Sorry, no places could be found.</div>'
    }
    for (let i = 0; i < places.items.length; i++) {
        let tags = (places.items[i].tags != undefined) ? places.items[i].tags[0].title : 'No info';
        let category = places.items[i].category.title
        let font_size = "1em"
        if (category.length > 20) font_size = '0.7em'
        placesHTMLString += `<div class="roundedBox place" style="background-color:#342B2D;">` +
            `        <div class="row" style="text-align:center;padding:0;margin:0;padding-top:2vh;">` +
            `            <div class="col-12 placeHeading">${places.items[i].title}<hr></div>` +
            `        </div>` +
            `        <div class="row" style="padding-right:20px">` +
            `            <div class="detail col-6">` +
            `                <i alt="category" title="category" class="material-icons md-scalable  ">category</i>` +
            `                     <span>${category}</span>` +
            `            </div>` +
            `            <div class="detail col-6">` +
            `                <i alt="distance" title="distance" class="material-icons md-scalable  ">directions_run</i>` +
            `                ${places.items[i].distance}m` +
            `            </div>` +
            `        </div>` +
            `        <div class="row" style="padding-right:20px">` +
            `            <div class="detail col-6">` +
            `                <i alt="name" title="name" class="material-icons md-scalable">article</i>` +
            `                ${tags}` +
            `            </div>` +
            `            <div class="detail col-6">` +
            `                <i alt="route" title="route" class="material-icons md-scalable  ">location_on</i>` +
            `                <a title="Show Route" href="https://www.google.com/maps/dir/${places.address}/${places.items[i].title} ${weather.city}">Show Route</a>` +
            `            </div>` +
            `        </div>` +
            `    </div>`;
    }
}
function displayPlaces() {
    //update results in html
    $('#places').html(placesHTMLString);
}

function getWeather(latitude, longitude) {
    let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${curLatitude}&lon=${curLongitude}&` +
        `exclude=minutely,daily&appid=${owpKey}`

    fetch(api).then(function (response) {
        let data = response.json();
        return data;
    }).then(function (data) {
        for (let i = 0; i < hours; i++) {
            weather.temperature[i] = Math.round(data.hourly[i].temp - 273);
            weather.description[i] = data.hourly[i].weather[0].main;
            weather.icon[i] = data.hourly[i].weather[0].icon;
        }
    }).then(function () {
        displayWeather();
    }).then(function () {
        getPlaces();
    });
}

function displayWeather() {
    let forecast = ''
    for (let i = 0; i < hours; i++) {
        forecast += `<div class="roundedBox" style="padding:10px;background-color:grey;border:2px solid darkgrey;color:black">`
        if (i == 0) forecast += `<div>Coming hour:</div>`;
        else if (i == 1) forecast += `<div>In 1 hour:</div>`;
        else forecast += `<div>In ${i} hours:</div>`;
        forecast += `<div class="weather-icon">` +
            `    <img style="height:100px;width:100px;" src="img/${weather.icon[i]}.svg"` + //OWM icons: http://openweathermap.org/img/wn/${weather.icon[i]}@2x.png" alt="">
            `</div>` +
            `<div class="temperature-value">` +
            `    ${weather.temperature[i]}°<span>C</span>` +
            `</div>` +
            `<div class="temperature-description">` +
            `    ${weather.description[i]}` +
            `</div>` +
            `</div>` +
            `</div>`
        ;
    }
    $('#weather').html(forecast);
}

if (`geolocation` in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    $('#geolocation').html('Geolocation not supported!');
}

function showError(error) {
    geolocationElement.style.display = "block";
    geolocationElement.innerHTML = error.message;
}