import { createApp } from 'vue'
// 引入Pinia 类似与vuex
import {createPinia} from 'pinia'
import './style.css'
import Loading from './components/loading/'
import App from './App.vue'


const store = createPinia()

let app = createApp(App)

// globalProperties
// 由于Vue3 没有Prototype 属性 使用 app.config.globalProperties 代替 然后去定义变量和函数
// vue2
// 之前 (Vue 2.x)
// Vue.prototype.$http = () => {}
// Vue3
//  之后 (Vue 3.x)
// const app = createApp({})
// app.config.globalProperties.$http = () => {}

type Filter = {
    format: <T extends any>(str: T) => T
  }

 
type Lod = {
  show: () => void,
  hide: () => void
} 

// 声明要扩充@vue/runtime-core包的声明.
// 这里扩充"ComponentCustomProperties"接口, 因为他是vue3中实例的属性的类型.
  declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $filters: Filter,
        $env:string,
        $loading:Lod
    }
  }

// 过滤器
app.config.globalProperties.$filters = {
    format<T extends any>(str: T): string {
      return `${str}`
    }
  } 
//Vue3定义全局函数和变量
app.config.globalProperties.$env = 'Vue3定义全局函数和变量'

app.use(store)
app.use(Loading)

app.mount('#app')
