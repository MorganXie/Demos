

let mainNode = document.querySelector('main');
let mainNodeWidth = parseFloat(getComputedStyle(mainNode).width);
let baseHeight = 200;
let rowList = [];
let rowTotalWidth = 0;



document.body.onresize  = throttle(function () {
    let keyword = document.querySelector('#search').value;
    mainNodeWidth = parseFloat(getComputedStyle(mainNode).width);
    mainNode.innerHTML= '';
    getData(keyword).then(render).catch(function (error) {
        console.log(error)
    });
},200);


var btn = document.querySelector('.button');
btn.onclick = throttle(function () {
    let keyword = document.querySelector('#search').value;
    mainNodeWidth = parseFloat(getComputedStyle(mainNode).width);
    mainNode.innerHTML= '';
    getData(keyword).then(render).catch(function (error) {
        console.log(error)
    });
},200);





function throttle(fn,delay) {
    let timer = null;
    return function () {
        let context  =this;
        clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(context,arguments);
        },delay)
    }
}

function render(data) {
    data.hits.forEach(function (imgInfo) {

        imgInfo.newHeight = baseHeight;
        imgInfo.newWidth  = (imgInfo.webformatWidth /imgInfo.webformatHeight)*baseHeight;

        if(imgInfo.newWidth +rowTotalWidth>mainNodeWidth){
            layout(rowList,rowTotalWidth);
            rowList= [imgInfo];
            rowTotalWidth  = imgInfo.newWidth;
        }
        else{
            rowList.push(imgInfo);
            rowTotalWidth+=imgInfo.newWidth
        }
    });
    layout(rowList,mainNodeWidth);
    rowList= [];
    rowTotalWidth = 0;
}

function layout(list,rowTotalWidth) {
    list.forEach(function (imgInfo) {
        let figureNode = document.createElement('figure');
        let imgNode = document.createElement('img');
        imgNode.src = imgInfo.webformatURL;
        figureNode.appendChild(imgNode);
        let newHeight = (mainNodeWidth/rowTotalWidth)*baseHeight;
        figureNode.style.height = newHeight +'px';
        figureNode.style.width = (imgInfo.webformatWidth/imgInfo.webformatHeight)*newHeight+'px';
        mainNode.appendChild(figureNode);

    })
}



function getData(keyword) {
    return new Promise(function (resolve, reject) {
        let data = {
            key: '6741769-e42f37e864eb4e5c54ac05a51',
            q: keyword,
            image_type: 'photo',
            per_page: 20
        };
        let url = 'https://pixabay.com/api/?';
        for (let key in data) {
            url += key + '=' + data[key] + '&';
        }
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.send();
        xhr.onload = function () {

            let json = JSON.parse(this.response);
            resolve(json);
        };
        xhr.onerror = function () {
            reject('ajax error');
        }
    })

}
