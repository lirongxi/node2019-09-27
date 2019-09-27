const express = require('express');
const app = express();
const moment = require('moment')
//导入cors模块,该模块为跨域所用
const cors = require('cors');
app.use(cors());

//解析表单的插件
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: false
}))


//创建数据库连接对象
const mysql = require('mysql');
const conn = mysql.createConnection({
	host: 'localhost', //数据库地址
	user: 'root', //账号
	password: 'root', //密码
	database: 'test', //库名
	multipleStatements: true //允许执行多条语句
});

//查询出所有数据
app.get('/api/getlist', (req, res) => {
	const sqlStr = 'select * from websites '
	conn.query(sqlStr, (err, results) => {
		if (err) return res.json({
			err_code: 1,
			message: '数据不存在',
			affextedRows: 0
		})
		res.json({
			err_code: 200,
			message: results,
			affextedRows: results.affextedRows
		})
	})
});

//查询数据
app.get('/api/getlistdetl', (req, res) => {
	const $id = req.query.id
	// console.log(req)
	// res.setHeader("Access-Control-Allow-Origin", "*");
	const sqlStr = 'select * from websites where id=?'
	conn.query(sqlStr, $id, (err, results) => {
		if (err) {
			return res.json({
				err_code: 1,
				message: '数据不存在',
				affextedRows: 0
			})
		}
		res.json({
			err_code: 200,
			message: results,
			affextedRows: results.affextedRows
		})
	})
});

//添加
app.post('/api/addcard', (req, res) => {
	const user = req.body
	//user.ctime = moment().format('YYYY-MM-DD HH:mm:ss') //格式化日期
	const sqlStr = 'insert into websites set ?'
	conn.query(sqlStr, user, (err, results) => {
		if (err) return res.json({
			err_code: 1,
			message: err,
			affectedRows: 0
		})
		res.json({
			err_code: 0,
			message: '恭喜成功',
			affectedRows: results.affectedRows
		})
	})
});


//修改
app.post('/api/update', function(req, res) {
	console.log(req.body);
	const id = req.body.id;
	const name = req.body.name;
	const sqlStr = "update websites set name='" + name + "'where id=" + id;
	conn.query(sqlStr, (err, results) => {
		if (err) return res.json({
			err_code: 1,
			message: err,
			affectedRows: 0
		});
		res.json({
			err_code: 0,
			message: '修改成功',
			affectedRows: results.affectedRows
		});
	})
});

//GET删除
app.get('/api/delete', function(req, res) {
	console.log(req)
	let id = req.query.id;
	let sql = 'delete from websites where id=' + id;
	conn.query(sql, id, (err, results) => {
		if (err) return res.json({
			err_code: 1,
			message: err,
			affectedRows: 0
		});
		res.json({
			err_code: 0,
			message: '删除成功',
			affectedRows: results.affectedRows
		})
	})
})

//POST删除
// app.post('/api/delete', function(req, res) {
// 	let id = req.body.id;
// 	let sql = 'delete from websites where id=' + id;
// 	conn.query(sql, id, (err, results) => {
// 		if (err) return res.json({
// 			err_code: 1,
// 			message: err,
// 			affectedRows: 0
// 		});
// 		res.json({
// 			err_code: 0,
// 			message: '删除成功',
// 			affectedRows: results.affectedRows
// 		})
// 	})
// })


/*
@POST=>{body}
@GET=>{query}
*/

// $.ajax({
// 	type: "get",
// 	url: "http://localhost:3001/api/delete",
// 	data: {
// 		id: [7, 11]
// 	},
// 	dataType: "json",
// 	// contentType:"text/html;charset=utf8",
// 	success: function(data) {
// 		console.log(data)
// 	},
// 	error: function(err) {
// 		console.log(err)
// 	}
// })
app.listen(3001, () => {
	console.log('正在监听端口3001,http://192.168.8.151:3001'); //192.168.1.114换成你的ip,本机ip查询用cmd=>ipconfig
})