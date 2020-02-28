window.setInterval(main, 5000);

function main() {
    let value = document.getElementById('input').value;
    if (value == null || value == "") {
        getDefaultWeatherDetails();
    }
}

function getWeatherDetails() {
    document.getElementById('cardcontainer').innerHTML = null;
    let place = document.getElementById("input").value;
    if (!place) {
        alert('We think theres a place missing');
        return;
    }
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + place + "&appid=9e853e141444a27749161009c0ccca31";
    let request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.onload = function () {
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            let iconurl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

            let tag = document.createElement("div");
            tag.setAttribute('id', "card1");
            tag.className = "col-sm-2 card";
            tag.innerHTML = '<p id="place">Paris</p><br>' +
                '<p id="temp">9C</p><br>' +
                '<img><br>' +
                '<p id="desc">Light Intesity Drizzle</p>';
            document.getElementById('cardcontainer').appendChild(tag);

            let card1 = document.getElementById('card1');
            card1.childNodes[0].innerHTML = data.name;
            card1.childNodes[2].innerHTML = (data.main.temp - 273.15).toFixed(2) + '<span>&#8451;</span>'; //297K − 273.15
            card1.childNodes[4].src = iconurl;
            card1.childNodes[6].innerHTML = data.weather[0].description.toUpperCase();
        } else {
            console.log('error')
            alert('Place not found :(');
        }
    }
    request.send()
}

function isEmpty() {
    if (!document.getElementById('input').value) {
        getDefaultWeatherDetails();
    }
}

getDefaultWeatherDetails = async () => {
    document.getElementById('cardcontainer').innerHTML = null;
    let cities = ['Jakarta', 'Lahore', 'Madina', 'Istanbul', 'Karbala'];
    for (let i = 0; i < cities.length; i++) {
        await fetchWeatherOf(cities[i], `card${i+1}`);
    }
}

fetchWeatherOf = async (city, id_card) => {
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=9e853e141444a27749161009c0ccca31";
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function () {
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            let tag = document.createElement("div");
            tag.setAttribute('id', id_card);
            tag.className = "col-sm-2 card";
            tag.innerHTML = '<p id="place">Paris</p><br>' +
                '<p id="temp">9C</p><br>' +
                '<img><br>' +
                '<p id="desc">Light Intesity Drizzle</p>';
            document.getElementById('cardcontainer').appendChild(tag);
            let iconurl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            let card = document.getElementById(id_card);
            card.childNodes[0].innerHTML = data.name;
            card.childNodes[2].innerHTML = (data.main.temp - 273.15).toFixed(2) + '<span>&#8451;</span>'; //297K − 273.15
            card.childNodes[4].src = iconurl;
            card.childNodes[6].innerHTML = data.weather[0].description.toUpperCase();
        } else {
            console.log('error')
        }
    }
    request.send()
}
