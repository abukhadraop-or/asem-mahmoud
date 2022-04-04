import getHttpRequest from './http-functions';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

/**
 * @param {string} sortBy Sort option.
 * @param {number} page Page number.
 * @return {Promise} Promise array of movie objects.
 */
export default async function fetchMovies(sortBy = 'popularity.desc', page = 1) {
  const response = await getHttpRequest(`${API_URL}movie?api_key=${API_KEY}&language=en-US&page=${page}&sort_by=${sortBy}`);
  return response.json();
};
