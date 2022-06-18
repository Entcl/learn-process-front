var fs = require("fs");

fs.readFile(
    "f6f5b35f6037ec742070ab1c938d0f71e9793dea.jpg@449w_389h_progressive.webp",
    function(err, data) {
        if (!err) {
            // console.log(data.toString());
            // fs.writeFile(file, data[, options], callback)
            fs.writeFile("abc.jpg", data, function(err) {
                if (!err) {
                    console.log("写入成功");
                }
            });
        }
    }
);