const repeatString = function(str, num) {
    if (num < 0) {
        return 'ERROR';
    };
    let combined = ''
    for (let i = 0; i < num; i++) combined += str;
    return combined;
};

// Do not edit below this line
module.exports = repeatString;
