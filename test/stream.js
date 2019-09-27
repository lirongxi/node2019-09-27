var fs = require("fs");

var rs = fs.createReadStream("sample.txt", "utf-8");

rs.on("data", function(chunk) {
	console.log("DATA");
	console.log(chunk);
});

rs.on("end", function(end) {
	console.log("END" + end);
});

rs.on("error", function(err) {
	console.log("ERROE" + err);
});
var wsl = fs.createWriteStream("output1.txt", "utf-8");

wsl.write("使用Stream写入文本数据..\n");

wsl.write("END");

wsl.end();

var ws2 = fs.createWriteStream("output2.txt", "utf-8");

ws2.write(new Buffer("使用Stream写入二进制数据..\n", "utf-8"));

ws2.write(new Buffer('END.', 'utf-8'));

ws2.end();

var rep = fs.createReadStream("output1.txt");

var res = fs.createWriteStream("output2.txt");

rep.pipe(res);