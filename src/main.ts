import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

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
// 声明要扩充@vue/runtime-core包的声明.
// 这里扩充"ComponentCustomProperties"接口, 因为他是vue3中实例的属性的类型.
  declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $filters: Filter,
        $env:string
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

app.mount('#app')
