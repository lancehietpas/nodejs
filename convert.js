var myBuffer = [];
var str = '50082D41891A3B10542B652010CC9A956B24DF87ED2A513CB9D6BF5C94C2069E';
var buffer = new Buffer(str, 'utf16le');
for (var i = 0; i < buffer.length; i++) {
    myBuffer.push(buffer[i]);
}
console.log(myBuffer);