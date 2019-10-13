function myCallback(data) {
    console.log(data)
}

function jsonp(url, data, callback) {
    if (typeof data === 'string') {
        callback = data;
        data = {}
    }
    var hasParams = url.indexOf('?');
    url += hasParams ? '&' : '?' + 'callback=' + callback;
    var params;
    for (var i in data) {
        params += '&' + i + '=' + data[i];
    }
    url += params;

    var script = document.createElement('script');
    script.setAttribute('src', url);
    document.querySelector('head').appendChild(script)

}

jsonp('http://baidu.com', {id: 34}, 'myCallback');
