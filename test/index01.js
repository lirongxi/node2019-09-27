var s = "Holle";

function greet(name) {
	console.log(s + "," + name + "!");
}

function hello() {
	console.log("Hello函数");
}
module.exports = {
	greet,
	hello
};