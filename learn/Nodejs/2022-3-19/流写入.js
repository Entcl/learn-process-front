var fs = require("fs");

var ws = fs.createWriteStream("hellohellohowareyou.txt");

ws.once("open", function() {
    console.log("流打开");
});
ws.once("close", function() {
    console.log("流关闭");
});
ws.write("流写入1");
ws.write("流写入2a");
ws.write("流写入3");
ws.write("流写入4");
ws.write("流写入5");
ws.write("流写入6");
ws.write("流写入7");

// ws.close();
ws.end();