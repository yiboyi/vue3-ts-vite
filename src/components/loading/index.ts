import { App,createVNode,VNode,render } from "vue";

import Loading from "./index.vue"

export default {
    install(app:App) {
         //createVNode vue提供的底层方法 可以给我们组件创建一个虚拟DOM 也就是Vnode
        const vnode:VNode = createVNode(Loading)
        console.log(vnode,6)
         //render 把我们的Vnode 生成真实DOM 并且挂载到指定节点
        render(vnode,document.body)
         // Vue 提供的全局配置 可以自定义
         app.config.globalProperties.$loading = {
            show: () => vnode.component?.exposed?.show(),
            hide: () => vnode.component?.exposed?.hide()
        }
    }
}