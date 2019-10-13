let userRouter = require("koa-router")();
let {fork} = require("child_process");
let crypto = require("crypto");
let db = require("../db/sql");


const routers = userRouter
    .get("/query", async function (ctx, next) {
        let result = await db.allUser();

        console.log(result);

        ctx.body = {
            result
        }
    })
    .get("/add", async function (ctx) {


    });

module.exports = routers;
