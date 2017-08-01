function setRouter(app){ 
 var router = app; 

app.get('/getNews',function (req,res){
	var news = [
		"北京中考成绩今年高分段人数普减",
		"云南宁洱13头野象连日进村与村民“抢粮”",
		"浪漫成灾！西伯利亚地区遭上万粉蝶入侵",
		"六小龄童将拍纪录片《西游记》师徒四人再聚首",
		"立体人行横道亮相北京街头 白蓝黄三色搭配标识醒目",
		"南京中医药大学格桑花“铺天盖地”引人来"
	];

	var data  =[];
	for(var i = 0 ; i<3; i++){
		var index = parseInt(Math.random()*news.length);
		data.push(news[index]);
		news.splice(index,1);
	}

	var cb = req.query.callback;
	if(cb){
		res.send(cb+'('+JSON.stringify(data)+')');
	}else {
		res.send(data);
	}
})}
 module.exports.setRouter = setRouter