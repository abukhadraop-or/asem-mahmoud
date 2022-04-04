/**
 * Http get request
 * @param {string} apiUrl The url will fetch from
 * @return {Promise} Promise get request
 */
export default function getHttpRequest(apiUrl) { return fetch(apiUrl, { method: 'GET' })};
