import http from 'http'

class Person{
    age = 12;
}

http.createServer((res) => {
    res.end('ok');
});

