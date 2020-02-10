import axios from 'axios';

export const fetchTrendingMovies = () => {
  return axios
    .get(
      `
      https://api.themoviedb.org/3/trending/movie/day?api_key=cd2d4b3db2221e8c320b037077ed7efe`,
    )
    .then(response => response.data.results);
};

export const fetchMovies = query => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=cd2d4b3db2221e8c320b037077ed7efe&language=en-US&query=${query}&page=1&include_adult=false`,
    )
    .then(response => response.data.results);
};

export const fetchMoviesWithId = id =>
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=cd2d4b3db2221e8c320b037077ed7efe&language=en-US`,
    )
    .then(response => response.data);

export const fetchCastWithId = id =>
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=cd2d4b3db2221e8c320b037077ed7efe`,
    )
    .then(response => response.data.cast);

export const fetchReviewsWithId = id =>
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=cd2d4b3db2221e8c320b037077ed7efe&language=en-US&page=1`,
    )
    .then(response => response.data.results);
