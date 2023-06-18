const timeRanges = ['20:00', '21:00', '22:00', '23:00', '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

const calculateWidth = (duration) => {
    const [hours, minutes, seconds] = duration.split(':');
    const totalMinutes = parseInt(hours) * 60 + parseInt(minutes) + parseInt(seconds) / 60;
    const pixelsPerMinute = 130 / 60;
    const width = totalMinutes * pixelsPerMinute;
    return `${width}px`;
};

const formatTimeRange = (startTime, endTime) => {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const startFormatted = start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const endFormatted = end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    return `${startFormatted} - ${endFormatted}`;
};

export { calculateWidth, formatTimeRange, timeRanges}