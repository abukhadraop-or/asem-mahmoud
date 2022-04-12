export const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
export const POSTER_SIZE = 'w500';

/**
 * Get movie poster image url.
 * @param {string} posterPath Poster movie Image.
 * @return {string} Movie image url.
 */
export default function getMoviePoster(posterPath) { return `${IMAGE_BASE_URL}${POSTER_SIZE}${posterPath}` };
