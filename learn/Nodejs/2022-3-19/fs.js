var fs = require("fs");

// 同步方法

// 打开
// fs.openSync(path[, flags[, mode]])
// flags r w
// mode操作权限
// 方法有返回值
// var fd = fs.openSync("hellohellohowareyou.txt", "w");
// // 写入
// // fs.writeSync(fd, string[, position[, encoding]])
// // position起始位置
// fs.writeSync(fd, "hellohellohowareyou");
// fs.closeSync(fd);

// 异步

fs.open("hellohellohowareyou.txt", "w", function(err, fd) {
    if (!err) {
        console.log(fd);
        // 打开文件
        fs.write(fd, "异步写入", function(err) {
            {
                console.log("写入成功");
            }
        });

        // 关闭
        fs.close(fd, function(err) {
            if (!err) {
                console.log("关闭文件");
            }
        });
    } else {
        console.log(err);
    }
    // console.log(arguments);
});