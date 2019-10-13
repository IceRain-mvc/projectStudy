let homeRouter = require("koa-router")();
let crypto = require("crypto");
const routers = homeRouter
    .get("/me", async function (ctx, next) {
        // 获取请求参数
        let query = ctx.query;
        console.log(query);

        ctx.body = {
            message: "/me"
        }
    })
    .get("/me/api", async function (ctx) {
        ctx.body = {
            message: "/me/api"
        }
    });

module.exports = routers;
