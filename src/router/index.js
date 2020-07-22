import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import route from "./routes/routes"
let routes = [];

Object.keys(route).forEach(item=>{
    routes = routes.concat(route[item])
})
const addComponent = (router) => {
    router.forEach((route) => {
      if (route.children) {
        route.children.forEach(item=>{
            if (item.type == 'page') {
              item.component = () => 
              import(`../pages/${item.name}.vue`)
              return
            }
            route.component = r => require.ensure([], () =>
              r(require(`../docs/${item.name}.md`)))
        })
      }
        if (route.type == 'page') {
          route.component = () => 
          import(`../pages/${route.name}.vue`)
          return
        }
        route.component = r => require.ensure([], () =>
          r(require(`../docs/${route.name}.md`)))
      
    })
  }
addComponent(routes)
const routerMap = {
    mode:'hash',
    routes
}
export default new Router({
    ...routerMap
})