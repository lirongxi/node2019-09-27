var greet = require("./index01");
// console.log(greet)

var s = "Michael";

greet.greet(s);

process.nextTick(function() {
	console.log('nextTick callback!');
});
console.log('nextTick was set!');


var fs = require('fs');

//获取文本中信息
// fs.readFile('sample.txt', 'utf-8', function(err, data) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(data);
// 	}
// });

//获取图片
// fs.readFile('0.jpg', function(err, data) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(data);
// 		console.log(data.length + ' bytes');
// 		var text = data.toString('utf-8');
// 		console.log(text);
// 		var aa = "鎮ㄨ鎵剧殑璧勬簮宸茶鍒犻櫎銆佸凡鏇村悕鎴栨殏鏃朵笉鍙敤銆�"
// 		var buf = Buffer.from(aa, 'utf-8');
// 		console.log(buf);
// 	}
// });

//同上
// var data = fs.readFileSync('sample.txt', 'utf-8');
// console.log(data);

//创建文件并写入内容
// var data = "Hello Word!!!!!!!!";
// fs.writeFile("output.text", data, function(err) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log("OK!")
// 	}
// });

//同上
// var data = "你好！";
// fs.writeFileSync("output.text", data);


fs.stat("sample.txt", function(err, stat) {
	if (err) {

	} else {
		//是否是文件
		console.log(stat.isFile());
		//是否是目录
		console.log(stat.isDirectory());
		//文件大小（字节）
		console.log(stat.size)
		//创建时间
		console.log(stat.birthtime)
		//修改时间
		console.log(stat.mtime)
	}
})