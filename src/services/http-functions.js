/**
 * Http get request.
 *
 * @param {string} apiUrl The url will fetch from.
 * @param {Object} headers The headers for api request.
 *
 * @return {Promise<Object>} Promise get request
 */
export default async function getHttpRequest(apiUrl, headers = {}) {
  const response = await fetch(apiUrl, { headers });

  return response.json()
};
