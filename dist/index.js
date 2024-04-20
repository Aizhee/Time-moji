/**
 * Get clock or cityscape emoji corresponding to the given date/time.
 * @param {Date} dateTime - The date/time for which to get the emoji.
 * @param {string} type - The type of emoji to get ('clock' or 'landscape').
 * @returns {string} The clock or cityscape emoji.
 */

function getTimeMoji(dateTime, type) {
    const inputDate = new Date(dateTime);

    // Check if inputDate is a valid Date object
    if (isNaN(inputDate.getTime())) {
        console.error('getTimeMoji > Invalid datetime parameter:', dateTime); // Log error to console
        return '🚨'; // return error emoji for invalid datetime
    }

    const hour = new Date(dateTime).getHours();
    const minute = new Date(dateTime).getMinutes();
    
    if (type === 'clock' || type === undefined) {
        const clockEmojis = {
            0: '🕛', 1: '🕐', 2: '🕑', 3: '🕒', 4: '🕓', 5: '🕔',
            6: '🕕', 7: '🕖', 8: '🕗', 9: '🕘', 10: '🕙', 11: '🕚',
            12: '🕛', 13: '🕐', 14: '🕑', 15: '🕒', 16: '🕓', 17: '🕔',
            18: '🕕', 19: '🕖', 20: '🕗', 21: '🕘', 22: '🕙', 23: '🕚'
        };
        let emoji = clockEmojis[hour];
        
        // Add half past emoji if minutes are greater than or equal to 30
        if (minute >= 30) {
            emoji = emoji.replace('🕐', '🕜'); 
            emoji = emoji.replace('🕑', '🕝');
            emoji = emoji.replace('🕒', '🕞');
            emoji = emoji.replace('🕓', '🕟');
            emoji = emoji.replace('🕔', '🕠');
            emoji = emoji.replace('🕕', '🕡');
            emoji = emoji.replace('🕖', '🕢');
            emoji = emoji.replace('🕗', '🕣');
            emoji = emoji.replace('🕘', '🕤');
            emoji = emoji.replace('🕙', '🕥');
            emoji = emoji.replace('🕚', '🕦');
            emoji = emoji.replace('🕛', '🕧');
        }
        return emoji || '🚨'; // fallback to error emoji if no clock emoji found
    } else if (type === 'landscape') {
        const landscapeEmojis = {
            6: '🌇', 7: '🌇', 8: '🌇', 9: '🌇', 10: '🌇', 11: '🌇',
            12: '🏙️', 13: '🏙️', 14: '🏙️', 15: '🏙️', 16: '🏙️', 17: '🏙️',
            18: '🌆', 19: '🌆', 20: '🌉', 21: '🌉', 22: '🌉', 23: '🌉'
        };
        return landscapeEmojis[hour] || '🌄'; // fallback to sunrise over mountains if no landscape emoji found
    } else {
        console.error('getTimeMoji > Invalid type parameter:', type); // Log error to console
        return '🚨'; // return error emoji for invalid type
    }
}


module.exports = getTimeMoji;
