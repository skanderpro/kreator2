/**
 * Formats a date to dd.mm.yyyy format using Intl.DateTimeFormat
 * @param {string|Date} date - The date to format (string or Date object)
 * @returns {string} Formatted date in dd.mm.yyyy format
 */
export const formatDate = (date) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;

    if (!(dateObj instanceof Date) || isNaN(dateObj)) {
        return '';
    }

    const formatter = new Intl.DateTimeFormat('uk-UA', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    return formatter.format(dateObj);
};
