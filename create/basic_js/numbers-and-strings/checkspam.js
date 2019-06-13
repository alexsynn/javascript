function checkSpam(str) {
    var toLowStr = str.toLowerCase();

    if ((toLowStr.indexOf("viagra") != -1) || (toLowStr.indexOf("xxx") != -1)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkSpam("innocent rabbit"));
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));