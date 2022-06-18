var fs = require("fs");
fs.writeFile(
    "hellohellohowareyou.txt",
    // { flag: "[r,w,a]" }
    "writeFile", { flag: "r" },
    function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("writeFile写入成功");
        }
    }
);