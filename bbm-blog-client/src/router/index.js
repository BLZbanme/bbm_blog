import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    hidenInMenu: true,
    component: () => import(/* webpackChunkName: "layout" */"../layout/BasicLayout"),
    children: [
      {
        path: '/blogs',
        name: 'blogs',
        meta: {
          icon: "book",
          title: "随笔"
        },
        component: () => import(/* webpackChunkName: "layout" */"../views/BlogList"),
      },
      {
        path: '/tags',
        name: 'tags',
        meta: {
          icon: "tags",
          title: "标签"
        },
        children: [
          {
            path: '/tags/:id',
            name: 'tag1',
            meta: {
              title: "tag1"
            }
          },
          {
            path: '/tags/:id',
            name: 'tag2',
            meta: {
              title: "tag2"
            }
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
