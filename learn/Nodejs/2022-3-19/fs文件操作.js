var fs = require("fs");

//
var c = fs.existsSync("abc.jpg");
console.log(c);

// fs.unlinkSync(path)
// fs.unlinkSync("111.js");

fs.readdir(".", function() {
    console.log(arguments);
});

//截取到指定位置
// 1汉字3字节
// fs.truncateSync("",3);

// fs.rename("a", "b", function(err) {
//     if (!err) {
//         console.log("修改成功");
//     }
// });

// fs.watchFile // curr prev// interval