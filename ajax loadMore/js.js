var btn = document.querySelector('#load-more');
var ct = document.querySelector('#ct');
var pageIndex = 0;
var isDataArrive = true;

btn.addEventListener('click', function(e) {
    e.preventDefault();

    if (!isDataArrive) {
        return;
    }

    laoaData(function(news) {
        renderPage(news);
        pageIndex += 5;
        isDataArrive = true;
    });




});

function laoaData(callback) {
    ajax({
        type: 'get',
        url: '/loadMore',
        data: {
            index: pageIndex,
            length: 5
        },
        onSuccess: callback,
        onError: function() {
            console.log('error');
        }
    });

}


function renderPage(news) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < news.length; i++) {
        var node = document.createElement('li');
        node.innerText = news[i];
        fragment.appendChild(node);
    }

    ct.appendChild(fragment);

}


function ajax(options) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 304) {
                var result = JSON.parse(xhr.responseText);
                options.onSuccess(result);

            } else {
                options.onError();
            }
        }
    };

    var query = '?';
    for (var key in options.data) {
        query += key + '=' + options.data[key] + '&';

    }

    query = query.substr(0, query.length - 1);
    xhr.open(options.type, options.url + query, true);
    xhr.send();

}