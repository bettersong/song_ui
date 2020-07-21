import syAlert from "./syAlert.vue"


syAlert.install = function(Vue) {
    Vue.component(syAlert.name,syAlert)
}

export default syAlert