// This file handles requests to the API
// https://openweathermap.org/
const key = '99a1be0de4899f37a23c15875aa70ed40';

const baseURL='http://api.openweathermap.org/data/2.5/weather?q=SanFransico&appid=9a1be0de4899f37a23c15875aa70ed40';

// Generates a promise that waits for a response
fetch(baseURL).then((data) => {console.log('response', data) })