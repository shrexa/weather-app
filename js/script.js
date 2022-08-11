// const BASE_URL = 'https://openweathermap.org';
// const WEATHER_ENDPOINT = 'data/2.5/weather';

// // secrets
// const PAYLOAD = {
//     "appid": '439d4b804bc8187953eb36d2a8c26a02',
//     "id": '2643743',
// };

// // given an object, complete a function that return query parameters string.
// /**
//  * query parameter syntax
//  * starts with ?
//  * [key]=[value]&[key2]=[value2]&[key3]=[value3]
// */

// const getQueryParameterStr = (obj) => {
//     const key_count = Object.keys(obj).length;
//     if(!obj || key_count == 0) {
//         return '';
//     }

//     let str = '?', i = 0;
//     for(const key in obj){
//         str += `${key}=${obj[key]}`;
//         if(i < key_count - 1) {
//             str += '&'
//         }
//         i++;
//     }
//     return str;
// }

// const getWeatherDataApiUrl = () => {
//     return `${BASE_URL}/${WEATHER_ENDPOINT}${getQueryParameterStr(PAYLOAD)}`
// }

const url = 'https://openweathermap.org/data/2.5/weather?id=2643743&appid=439d4b804bc8187953eb36d2a8c26a02';



getWeatherDataTableRow = (key, value) => {
    return `
        <tr>
            <th scope="row">${key}</th>
            <td>${value}</td>
        </tr>
    `
}

const processWeatherDataUIChanges = (data) => {
    const UI_ELEMENT = document.getElementById('weather_data');
    if(!UI_ELEMENT) {
        alert('UI element does not exist in dom');    
        return;
    }
    
    const table_rows_obj = {};
    table_rows_obj['Name'] = data.name;
    table_rows_obj['Temperature'] = data.main.temp;
    table_rows_obj['Humidity'] = data.main.humidity;
    table_rows_obj['Pressure'] = data.main.pressure;
    table_rows_obj['Wind Speed'] = data.wind.speed;

    let processedHTML = ``;
    
    for(const key in table_rows_obj) {
        processedHTML += getWeatherDataTableRow(key, table_rows_obj[key]);
    }

    // Object.keys(table_rows_obj).forEach(key => processedHTML += getWeatherDataTableRow(key, table_rows_obj[key]))
    UI_ELEMENT.innerHTML = processedHTML;
}


const getWeatherData = () => {

    // console.log("I'm in the resturant");

    // es-lint : shadowed variable. // bad practice!!
    // const url = 'something';
    // console.log(url);

    // fetch - in build js function that acts like a waiter.
    // console.log("I've placed the order");
    fetch(url) // placed the order to waiter
    .then(
        (response) => { // waiter brings the food in a sexy looking fashion
            // we convert it into json format with promise | so that we can access the properties of it.
            // console.log("order on my table, let's serve it")
            // console.log(response);
            return response.json()
        }
    )
    .then(
        (parsedData) => {

            console.log(parsedData)
            processWeatherDataUIChanges(parsedData);
        }
    )
    .catch(
        (err) => {
            console.log(err);
            // alert('order failed');
            alert('api request failed');
        }
    );

    // const int = setInterval(() => {
    //     console.log("I'm eating");
    // }, 10);

    // setTimeout(() => {
    //     clearInterval(int);
    //     console.log("I've stopped eating")
    // }, 3000);
}

getWeatherData();