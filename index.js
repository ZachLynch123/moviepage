const axios = require('axios');

const url = 'https://api.themoviedb.org/3/movie/550?api_key=f8be595d434ed3dc41d8c73f0760f653';

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