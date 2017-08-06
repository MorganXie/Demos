app.get('/loadMore', function(req, res) {

        var curIdex = req.query.start;
        var len = req.query.len;
        console.log(len);
        var news = [];

        for (var i = 0; i < len; i++) {
            news.push('内容' + (parseInt(curIdex) + i));
        }
        
        res.send({
            status:1,
            data:news
        });

    }

);