const router = require("koa-router")();

const me = require("./me");
const home = require("./home");
const user = require("./user");

router.use("", home.routes(), home.allowedMethods());
router.use("", me.routes(), me.allowedMethods());
router.use("", user.routes(), user.allowedMethods());

module.exports = router;
