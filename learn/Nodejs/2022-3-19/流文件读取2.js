var fs = require("fs");

var rs = fs.createReadStream(
    "f6f5b35f6037ec742070ab1c938d0f71e9793dea.jpg@449w_389h_progressive.webp"
);

var ws = fs.createWriteStream("哈萨德哈哈哈啥啥啥.jpg");

rs.pipe(ws);