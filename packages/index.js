import Button from "./button"
import Alert from "./alert"
import Header from "./header"
import Menu from './menu'


const components = [
    Button,
    Alert,
    Header,
    Menu
]


const install = (Vue) => {
    if(install.installed) return
    components.map(component => Vue.component(component.name, component))
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default{
    install,
    Alert,
    Button,
    Header,
    Menu
}