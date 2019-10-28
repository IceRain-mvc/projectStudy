// eslint-disable-next-line strict
exports.index = async () => {};

exports.new = async ctx => {
  const { name } = ctx.query;
  ctx.body = {
    name,
    message: 'get/new',
  };
};

exports.create = async (ctx) => {};

exports.show = async ctx => {
  const { id } = ctx.params;
  ctx.body = {
    id,
    message: '动态路由',
  };

};

exports.edit = async () => {};

exports.update = async (ctx) => {
  const {age} = ctx.request;
  const { id } = ctx.params;
  ctx.body = {
    methods:'PUT',
    id,
    age
  }


};

exports.destroy = async () => {};
