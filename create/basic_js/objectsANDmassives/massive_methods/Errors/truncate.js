function truncate(str, maxlength) {
    if (str.length > maxlength) {
        str = str.substring(0, maxlength - 3) + '...';
        // console.log(str);
    } else {
        // do nothing
        // console.log(str);
    }

    return str;
}

console.log(truncate('01234567890', 10));
console.log(truncate('Hello1234567890', 10));
console.log(truncate('Hello1234567890x123', 10));
console.log(truncate('Hello', 10));