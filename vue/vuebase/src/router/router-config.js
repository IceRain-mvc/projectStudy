

const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    path: '/songdetail',
    name: 'songdetail',
    component: () => import("../page/Songdetail.vue"),
    meta:{
      auth:true
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import("../page/Home.vue"),
    meta:{
      auth:true
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import("../page/Detail.vue"),
    meta:{
      auth:true
    }
  },{
    path: '/login',
    name: 'login',
    component: () => import("../page/Login.vue"),
    meta: {
      auth: false
    }
  }
];

export default routes
