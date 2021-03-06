

module.exports.replaceOn = function(line, start, str) {
    return line.substr(0,start) + str + line.substr(start+str.length);
}

module.exports.shuffle = function(word) {
    var a = word.split(""),
        n = a.length;

    for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
        }
    return a.join("");
}

module.exports.commonStartingString = function(line1,line2) {
    for(var i=0; i < line1.length; i++){
        if(line1[i] !== line2[i]) return i;
    }
}