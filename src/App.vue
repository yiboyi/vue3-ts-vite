<template>
  <div>
    <div class="content">
      <div>
         <button @click="changFlag">flag = {{ flag }}</button>
      <div>
        标题{{ title }}
      </div>
      </div>
      <DialogVue v-model:title="title" v-model="flag" v-model.yifeng="isflag"></DialogVue>
    </div>
    <Directives></Directives>
    <Hooks></Hooks>
    <div style="margin-left:150px;">{{$filters.format('全局过滤器使用')}}</div>
    <div style="color:red;margin-left: 150px;">{{ $env }}</div>

    <button @click="showLoading">切换 自定义组件Loading</button>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import DialogVue from './components/Dialog.vue';
import Directives from './components/Directives.vue'
import Hooks from './components/HooksDemo.vue'
import { ComponentInternalInstance, getCurrentInstance } from 'vue'
let flag = ref<boolean>(true)
// 自定义修饰符
let isflag = ref<boolean>(true)
let title = ref<string>('我是字符串')
const changFlag = () => {
  flag.value = !flag.value
}

// 自定义vue组件
const { appContext } = getCurrentInstance() as ComponentInternalInstance
const showLoading = ()=>{
  appContext.config.globalProperties.$loading.show()
  setTimeout(() => {
    appContext.config.globalProperties.$loading.hide()
  },3000)
}
</script>

<style scoped lang="scss">
.content {
display: flex;
margin-left:30px;
margin-top: 50px;
}
</style>
