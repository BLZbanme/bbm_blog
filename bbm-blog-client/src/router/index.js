import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "layout" */"../layout/BasicLayout"),
      children: [
        {
          path: "/",
          name: "analysis",
          meta: { icon: "dashboard", title: "分析页" },
          component: () =>
            import(/* webpackChunkName: "user" */ "../views/About")
        }
      ]
    },
    {
      path: '/',
      name: 'blogs',
      component: () => import(/* webpackChunkName: "layout" */"../views/BlogList"),
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
