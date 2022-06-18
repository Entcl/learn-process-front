var fs = require("fs");

var rs = fs.createReadStream(
    "f6f5b35f6037ec742070ab1c938d0f71e9793dea.jpg@449w_389h_progressive.webp"
);

rs.once("open", function() {
    console.log("流打开");
});
rs.once("close", function() {
    console.log("流关闭");
});

rs.on("data", function(data) {
    console.log(data);
});