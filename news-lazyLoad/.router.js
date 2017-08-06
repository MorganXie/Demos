function setRouter(app){ 
 var router = app; 



app.get('/getNews', function(req,res) {
    var newsList = [{
            link: '#',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1851131424_150120/0',
            title: '1木工大哥花10万“美国一月游” 牵出特大偷渡案',
            brif: '这起公安部督办特大偷渡案内幕，警方抓获7名...'
        },
        {
            link: '#',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1851084575_150120/0',
            title: '2人社部：11个地区上调最低工资 上海2300元最高',
            brif: '城镇私营单位就业人员平均工资达42833元...'
        },
        {
            link: '#',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1851131424_150120/0',
            title: '3木工大哥花10万“美国一月游” 牵出特大偷渡案',
            brif: '这起公安部督办特大偷渡案内幕，警方抓获7名...'
        },
        {
            link: '#',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1851084575_150120/0',
            title: '4人社部：11个地区上调最低工资 上海2300元最高',
            brif: '城镇私营单位就业人员平均工资达42833元...'
        },
        {
            link: '#',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1851131424_150120/0',
            title: '5木工大哥花10万“美国一月游” 牵出特大偷渡案',
            brif: '这起公安部督办特大偷渡案内幕，警方抓获7名...'
        },
        {
            link: '#',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1851084575_150120/0',
            title: '6人社部：11个地区上调最低工资 上海2300元最高',
            brif: '城镇私营单位就业人员平均工资达42833元...'
        },
        {
            link: '#',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1851131424_150120/0',
            title: '7木工大哥花10万“美国一月游” 牵出特大偷渡案',
            brif: '这起公安部督办特大偷渡案内幕，警方抓获7名...'
        },
        {
            link: '#',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1851084575_150120/0',
            title: '8人社部：11个地区上调最低工资 上海2300元最高',
            brif: '城镇私营单位就业人员平均工资达42833元...'
        },
        {
            link: '#',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1851131424_150120/0',
            title: '9木工大哥花10万“美国一月游” 牵出特大偷渡案',
            brif: '这起公安部督办特大偷渡案内幕，警方抓获7名...'
        },
        {
            link: '#',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1851084575_150120/0',
            title: '10人社部：11个地区上调最低工资 上海2300元最高',
            brif: '城镇私营单位就业人员平均工资达42833元...'
        },
        {
            link: '#',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1851131424_150120/0',
            title: '11木工大哥花10万“美国一月游” 牵出特大偷渡案',
            brif: '这起公安部督办特大偷渡案内幕，警方抓获7名...'
        },
        {
            link: '#',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1851084575_150120/0',
            title: '12人社部：11个地区上调最低工资 上海2300元最高',
            brif: '城镇私营单位就业人员平均工资达42833元...'
        },
        {
            link: '#',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1851131424_150120/0',
            title: '13木工大哥花10万“美国一月游” 牵出特大偷渡案',
            brif: '这起公安部督办特大偷渡案内幕，警方抓获7名...'
        },
        {
            link: '#',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1851084575_150120/0',
            title: '14人社部：11个地区上调最低工资 上海2300元最高',
            brif: '城镇私营单位就业人员平均工资达42833元...'
        },
        {
            link: '#',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1851131424_150120/0',
            title: '15木工大哥花10万“美国一月游” 牵出特大偷渡案',
            brif: '这起公安部督办特大偷渡案内幕，警方抓获7名...'
        },
        {
            link: '#',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1851084575_150120/0',
            title: '16人社部：11个地区上调最低工资 上海2300元最高',
            brif: '城镇私营单位就业人员平均工资达42833元...'
        },
        {
            link: '#',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1851131424_150120/0',
            title: '17木工大哥花10万“美国一月游” 牵出特大偷渡案',
            brif: '这起公安部督办特大偷渡案内幕，警方抓获7名...'
        },
        {
            link: '#',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1851084575_150120/0',
            title: '18人社部：11个地区上调最低工资 上海2300元最高',
            brif: '城镇私营单位就业人员平均工资达42833元...'
        },
        {
            link: '#',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1851131424_150120/0',
            title: '19木工大哥花10万“美国一月游” 牵出特大偷渡案',
            brif: '这起公安部督办特大偷渡案内幕，警方抓获7名...'
        },
        {
            link: '#',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1851084575_150120/0',
            title: '20人社部：11个地区上调最低工资 上海2300元最高',
            brif: '城镇私营单位就业人员平均工资达42833元...'
        },
        {
            link: '#',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1851131424_150120/0',
            title: '21木工大哥花10万“美国一月游” 牵出特大偷渡案',
            brif: '这起公安部督办特大偷渡案内幕，警方抓获7名...'
        },
        {
            link: '#',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1851084575_150120/0',
            title: '22人社部：11个地区上调最低工资 上海2300元最高',
            brif: '城镇私营单位就业人员平均工资达42833元...'
        },
        {
            link: '#',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1851131424_150120/0',
            title: '23木工大哥花10万“美国一月游” 牵出特大偷渡案',
            brif: '这起公安部督办特大偷渡案内幕，警方抓获7名...'
        },
        {
            link: '#',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1851084575_150120/0',
            title: '24人社部：11个地区上调最低工资 上海2300元最高',
            brif: '城镇私营单位就业人员平均工资达42833元...'
        },
        {
            link: '#',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1851131424_150120/0',
            title: '25木工大哥花10万“美国一月游” 牵出特大偷渡案',
            brif: '这起公安部督办特大偷渡案内幕，警方抓获7名...'
        }
    ]

    var pageIndex = req.query.page;
    var len = 3;
    retNews = newsList.slice(pageIndex * len, pageIndex * len + len);

    res.send({
        status: 0,
        data: retNews
    })
})}
 module.exports.setRouter = setRouter