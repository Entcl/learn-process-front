var st = "aaa22";

// buffer和array不同的地方位数确定之后不能修改
var bu = Buffer.from(st);
// unicode表
// 16进制显示
// 范围是0-255 or 00-ff
// 1 buffer = 1 b
console.log(bu);
console.log(bu.length);

// Buffer.alloc()
// 通过操作索引值的方式添加数值
var buffer2 = Buffer.alloc(10);
// Buffer.toString();