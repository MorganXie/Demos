var $ = require('./lib/jquery-3.2.1.min.js')
var Carousel = require('./components/carousel.js')
var Gotop = require('./components/gotop.js')
var Lazyload = require('./components/lazyload.js')



new Gotop($('body'));

Carousel.init($('#header .carousel'))

Lazyload.init($('.news-content'))