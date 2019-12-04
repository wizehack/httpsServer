const fs = require('fs');

module.exports.read = function (filename) {
    var fileContents = null;

    try {
        fileContents = fs.readFileSync(filename);
    } catch (e) {
        console.error('Read error: ', e);
    }

    return fileContents;
}
