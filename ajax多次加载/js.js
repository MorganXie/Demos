var btn = document.querySelector('#load-more');
var ct = document.querySelector('#ct');
var pageIndex = 0;
var isDataArrive = true;

btn.addEventListener('click', function(e) {
    e.preventDefault();

    if (!isDataArrive) {
        return;
    }

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {

        if (xhr.readyState == '4') {
            if (xhr.status === 200 || xhr.status === 304) {
                var result = JSON.parse(xhr.responseText);
                console.log(result);
                var fragment = document.createDocumentFragment();

                for (var i = 0; i < result.length; i++) {
                    var node = document.createElement('li');
                    node.innerText = result[i];
                    fragment.appendChild(node);

                }
                ct.appendChild(fragment);
                pageIndex += 5;

            } else {
                console.log('出错了');

            }
            isDataArrive = true;
        }

    };
    xhr.open('get', '/loadMore?index=' + pageIndex + '&length=5', true);
    xhr.send();
    isDataArrive = false;


});