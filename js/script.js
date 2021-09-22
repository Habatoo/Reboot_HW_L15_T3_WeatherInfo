function onButtonClicked() {

    let city = document.getElementById("city").value;
    let weather;

    if (city != "") {  // при пустом городе запрос не обрабатывается
        weather = getWeatherFromBackoffice(city);

        if (weather != null) {    // проверка ответа запроса погоды по городу
            document.getElementById("main_d").innerHTML = "Основное";
            document.getElementById("main").innerHTML = weather.weather[0].main;
            document.getElementById("description_d").innerHTML = "Подробное описание";
            document.getElementById("description").innerHTML = weather.weather[0].description;
            document.getElementById("temp_d").innerHTML = "Температура";
            document.getElementById("temp").innerHTML = weather.main.temp;
            document.getElementById("feels_like_d").innerHTML = "Ощущается";
            document.getElementById("feels_like").innerHTML = weather.main.feels_like;
            document.getElementById("wind_d").innerHTML = "Скорость ветра";
            document.getElementById("wind").innerHTML = weather.wind.speed;
        } else {  // сообщение при отсутствии запрошенного города
            alert("Информация по городу " + city + "\nне найдена.");
        }
    }
}

// Запрос поиска информации по погоде по городам
// через конструктор строки url с наименованием города
function getWeatherFromBackoffice(city) {

    let xhr = new XMLHttpRequest();
    let url = "http://localhost:3000/weather/" + city + ".json";
    xhr.open("GET", url, false);
    xhr.send(null);
    let response;
    if (xhr.status === 200) {  // проверка статуса ответа на запрос
        response = JSON.parse(xhr.responseText);
    } else {
        response = null; // если ответ на запрос отличается от статуса 200
    }

    return response;
}