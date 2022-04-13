import getHttpRequest from './http-functions';

export const API_URL = process.env.REACT_APP_API_URL;
export const API_KEY = process.env.REACT_APP_API_KEY;

/**
 * Fetch movies.
 *
 * @param {string} sortBy Sort option.
 * @param {number} page Page number.
 *
 * @return {Promise} Promise array of movie objects.
 */
export const fetchMovies = (sortBy = 'popularity.desc', page = 1) =>
  getHttpRequest(`${API_URL}movie?api_key=${API_KEY}&language=en-US&page=${page}&sort_by=${sortBy}`);
