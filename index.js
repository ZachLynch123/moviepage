const axios = require('axios');
const keys = require('./keys');

const url = `https://api.themoviedb.org/3/movie/550?api_key=${keys.apiKey}`;

const getData = async url => {
    try {
        const response = await axios.get(url);
        const data = response.data;
        console.log(data);
    } catch(err) {
        console.log(err);
    }
}

getData(url);