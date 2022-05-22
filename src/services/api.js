import axios from "axios";
const API_KEY = "30b880cb8af36a78b014f41021bfb163"
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const getFilms = async (page = 1) => {
    const response = await axios.get(`/trending/movies/day?api_key=${API_KEY}&page=${page}`);
    return response.data.results;
}

