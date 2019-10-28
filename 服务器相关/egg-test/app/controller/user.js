// app/controller/posts.js
exports.index = async (ctx) => {
  ctx.body = {
    message:"index"

  }
};

exports.new = async (ctx) => {

  ctx.body = [
    {
      userName:"张三",
      id: ctx.query.id
    }
  ]


  //let result = await this.app.mysql.insert()  // shuoshuo
  //user
  //1:shuoshuo
  //2:tupian imgId  base64 titleId: 事务:一起执行多个sql语句
  //-javaagent:/Applications/IntelliJ IDEA 2.app/Contents/bin/jetbrains-agent.jar
  // 临时变量

  //result.insertId

};
//post
exports.create = async (ctx) => {
  let {name} = ctx.request.body;
  console.log(name);
  ctx.body = {
    id: "111",
    message: name
  }
};

//  /api/user/7342872398
exports.show = async (ctx) => {
  let {id} = ctx.params;
  ctx.body = {
    message: id
  }

};

exports.edit = async (ctx) => {

};

exports.update = async (ctx) => {

};

exports.destroy = async (ctx) => {

};
