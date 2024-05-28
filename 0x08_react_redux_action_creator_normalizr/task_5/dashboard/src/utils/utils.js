export function getCurrentYear() {
    return new Date().getFullYear()
}

export function getFooterCopy(isIndex) {
    if (isIndex) {
        return "Holberton School";
    } else {
        return "Holberton School Main Dashboard"
    };
}

export function getLatestNotification() {
    return '<strong>Urgent Requirement</strong> - complete by EOD';
}
