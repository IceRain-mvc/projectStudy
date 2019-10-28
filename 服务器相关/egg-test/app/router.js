'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/news', controller.home.index);
  router.resources('posts', '/api/posts', controller.posts);

  //路由的名字  get  post  静态?   /:id
  //
  router.resources('user','/api/user',controller.user);
  //sted

};
