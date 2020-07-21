import Vue from 'vue'
import router from 'vue-router'

Vue.use(router)
import route from "./routes/routes"
let routes = [];

Object.keys(route).forEach(item=>{
    routes = routes.concat(route[item])
})
const addComponent = (router) => {
    router.forEach((route) => {
      if (route.items) {
        addComponent(route.items)
        routes = routes.concat(route.items)
      } else {
        if (route.type == 'page') {
            console.log(require(`../pages/${route.name}.vue`))
          route.component = () => 
          import(`../pages/${route.name}.vue`)
          return
        }
        route.component = r => require.ensure([], () =>
          r(require(`../docs/${route.name}.md`)))
      }
    })
  }
addComponent(routes)
const routerMap = {
    mode:'hash',
    routes
}
export default new router({
    ...routerMap
})