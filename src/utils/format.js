import numeral from 'numeral';
import { format, getTime, formatDistanceToNow } from 'date-fns';

export function currency(number) {
    return numeral(number).format(Number.isInteger(number) ? '$0,0' : '$0,0.00');
}

export function percentFormat(number) {
    return numeral(number / 100).format('0.0%');
}

export function number(number) {
    return numeral(number).format();
}

export function fDate(date) {
    return format(new Date(date), 'dd MMMM yyyy');
}

export function fDateTime(date) {
    return format(new Date(date), 'dd MMM yyyy HH:mm');
}

export function fTimestamp(date) {
    return getTime(new Date(date));
}

export function fDateTimeSuffix(date) {
    return format(new Date(date), 'dd/MM/yyyy hh:mm p');
}

export function fToNow(date) {
    if (!date) {
        return;
    }
    return formatDistanceToNow(new Date(date), {
        addSuffix: true
    });
}

export function fNumber(number) {
    return numeral(number).format();
}

export function convertToMonthName(dateString) {
    const date = new Date(dateString);
    const monthName = date.toLocaleString('default', { month: 'short' });

    return monthName;
}

export function convertToMonthNameWithOffset(dateString, offset) {
    const date = new Date(dateString);
    //Adjust date
    date.setMonth(date.getMonth() + offset);
    const monthName = date.toLocaleString('default', { month: 'short' });

    return monthName;
}