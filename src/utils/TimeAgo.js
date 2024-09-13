import { formatDistanceToNow } from 'date-fns';

const TimeAgo = (date) => {
    let timeAgo = ""
    try {
        const dateObj = new Date(date);
        timeAgo = formatDistanceToNow(dateObj, { addSuffix: true });
    } catch (error) {
        //console.log(error);
    }

    return timeAgo;
};

export default TimeAgo;