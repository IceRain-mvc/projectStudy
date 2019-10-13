let Koa = require("koa");
let router = require("./router/index");


let app = new Koa();
app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, function () {
    console.log("server starting....port is 3001");
});
