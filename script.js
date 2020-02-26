window.setInterval(main, 5000);

function main() {
    let value = document.getElementById('input').value;
    if (value == null || value == "") {
        getDefaultWeatherDetails();
    }
}

function getDefaultWeatherDetails() {

    let url1 = "http://api.openweathermap.org/data/2.5/weather?q=lahore&appid=9e853e141444a27749161009c0ccca31";
    let url2 = "http://api.openweathermap.org/data/2.5/weather?q=madina&appid=9e853e141444a27749161009c0ccca31";
    let url3 = "http://api.openweathermap.org/data/2.5/weather?q=jakarta&appid=9e853e141444a27749161009c0ccca31";
    let url4 = "http://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=9e853e141444a27749161009c0ccca31";
    let url5 = "http://api.openweathermap.org/data/2.5/weather?q=karbala&appid=9e853e141444a27749161009c0ccca31";

    let request = new XMLHttpRequest();
    let request2 = new XMLHttpRequest();
    let request3 = new XMLHttpRequest();
    let request4 = new XMLHttpRequest();
    let request5 = new XMLHttpRequest();


    request.open('GET', url1, true);
    request2.open('GET', url2, true);
    request3.open('GET', url3, true);
    request4.open('GET', url4, true);
    request5.open('GET', url5, true);

    document.getElementById('cardcontainer').innerHTML = null;

    request.onload = function () {
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            let tag = document.createElement("div");
            tag.setAttribute('id', "card1");
            tag.className = "col-sm-2 card";
            tag.innerHTML = '<p id="place">Paris</p><br>' +
                '<p id="temp">9C</p><br>' +
                '<img><br>' +
                '<p id="desc">Light Intesity Drizzle</p>';
            document.getElementById('cardcontainer').appendChild(tag);

            let iconurl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            let card1 = document.getElementById('card1');
            card1.childNodes[0].innerHTML = data.name;
            card1.childNodes[2].innerHTML = (data.main.temp - 273.15).toFixed(2) + '<span>&#8451;</span>'; //297K − 273.15
            card1.childNodes[4].src = iconurl;
            card1.childNodes[6].innerHTML = data.weather[0].description.toUpperCase();
        } else {
            console.log('error')
        }
    }
    request2.onload = function () {
        var data = JSON.parse(this.response)
        if (request2.status >= 200 && request2.status < 400) {
            let tag = document.createElement("div");
            tag.setAttribute('id', "card2");
            tag.className = "col-sm-2 card";
            tag.innerHTML = '<p id="place">Paris</p><br>' +
                '<p id="temp">9C</p><br>' +
                '<img><br>' +
                '<p id="desc">Light Intesity Drizzle</p>';
            document.getElementById('cardcontainer').appendChild(tag);

            let iconurl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            let card2 = document.getElementById('card2');
            card2.childNodes[0].innerHTML = data.name;
            card2.childNodes[2].innerHTML = (data.main.temp - 273.15).toFixed(2) + '<span>&#8451;</span>'; //297K − 273.15
            card2.childNodes[4].src = iconurl;
            card2.childNodes[6].innerHTML = data.weather[0].description.toUpperCase();
        } else {
            console.log('error')
        }
    }
    request3.onload = function () {
        var data = JSON.parse(this.response)
        if (request3.status >= 200 && request3.status < 400) {
            let tag = document.createElement("div");
            tag.setAttribute('id', "card3");
            tag.className = "col-sm-2 card";
            tag.innerHTML = '<p id="place">Paris</p><br>' +
                '<p id="temp">9C</p><br>' +
                '<img><br>' +
                '<p id="desc">Light Intesity Drizzle</p>';
            document.getElementById('cardcontainer').appendChild(tag);

            let iconurl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            let card3 = document.getElementById('card3');
            card3.childNodes[0].innerHTML = data.name;
            card3.childNodes[2].innerHTML = (data.main.temp - 273.15).toFixed(2) + '<span>&#8451;</span>'; //297K − 273.15
            card3.childNodes[4].src = iconurl;
            card3.childNodes[6].innerHTML = data.weather[0].description.toUpperCase();
        } else {
            console.log('error')
        }
    }
    request4.onload = function () {
        var data = JSON.parse(this.response)
        if (request4.status >= 200 && request4.status < 400) {
            let tag = document.createElement("div");
            tag.setAttribute('id', "card4");
            tag.className = "col-sm-2 card";
            tag.innerHTML = '<p id="place">Paris</p><br>' +
                '<p id="temp">9C</p><br>' +
                '<img><br>' +
                '<p id="desc">Light Intesity Drizzle</p>';
            document.getElementById('cardcontainer').appendChild(tag);

            let iconurl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            let card4 = document.getElementById('card4');
            card4.childNodes[0].innerHTML = data.name;
            card4.childNodes[2].innerHTML = (data.main.temp - 273.15).toFixed(2) + '<span>&#8451;</span>'; //297K − 273.15
            card4.childNodes[4].src = iconurl;
            card4.childNodes[6].innerHTML = data.weather[0].description.toUpperCase();
        } else {
            console.log('error')
        }
    }
    request5.onload = function () {
        var data = JSON.parse(this.response)
        if (request5.status >= 200 && request5.status < 400) {
            let tag = document.createElement("div");
            tag.setAttribute('id', "card5");
            tag.className = "col-sm-2 card";
            tag.innerHTML = '<p id="place">Paris</p><br>' +
                '<p id="temp">9C</p><br>' +
                '<img><br>' +
                '<p id="desc">Light Intesity Drizzle</p>';
            document.getElementById('cardcontainer').appendChild(tag);

            let iconurl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            let card5 = document.getElementById('card5');
            card5.childNodes[0].innerHTML = data.name;
            card5.childNodes[2].innerHTML = (data.main.temp - 273.15).toFixed(2) + '<span>&#8451;</span>'; //297K − 273.15
            card5.childNodes[4].src = iconurl;
            card5.childNodes[6].innerHTML = data.weather[0].description.toUpperCase();
        } else {
            console.log('error')
        }
    }

    request.send()
    request2.send()
    request3.send()
    request4.send()
    request5.send()
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

function isEmpty(){
    if(!document.getElementById('input').value){
        getDefaultWeatherDetails();
    }
}