import momnet from 'momnet';

const MAX_RATE = 10;

/**
 * Get percentage value.
 *
 * @param {number} number The number for get percentage value.
 *
 * @return {number} Percentage value.
 */
export const getPercentage = (number) => Math.round(number / MAX_RATE * 100);

/**
 * Formate date.
 *
 * @param {string} date The number for get percentage value.
 *
 * @return {Date} Formatted date.
 */
export const formateDate = (date) => momnet(date).format('MMM D, YYYY');
