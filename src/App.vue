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
    <div style="margin-left:150px;">{{ $filters.format('全局过滤器使用') }}</div>
    <div style="color:red;margin-left: 150px;">{{ $env }}</div>

    <button @click="showLoading">切换 自定义组件Loading</button>

    <div style="display: flex;align-items: center;">
      <div style="color:pink;font-size:20px;">
        pinia:{{ userName.current }}--------{{ userName.name }}
      </div>
      <button @click="btnPinia">修改piniaState的方法</button>
    </div>

  </div>
</template>

<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import DialogVue from './components/Dialog.vue';
import Directives from './components/Directives.vue'
import Hooks from './components/HooksDemo.vue'
import { ComponentInternalInstance, getCurrentInstance } from 'vue'
import { uesTestStore } from './store/index'
import { storeToRefs } from 'pinia'

let flag = ref<boolean>(true)
// 自定义修饰符
let isflag = ref<boolean>(true)
let title = ref<string>('我是字符串')
const changFlag = () => {
  flag.value = !flag.value
}

// 自定义vue组件
const { appContext } = getCurrentInstance() as ComponentInternalInstance
const showLoading = () => {
  appContext.config.globalProperties.$loading.show()
  setTimeout(() => {
    appContext.config.globalProperties.$loading.hide()
  }, 3000)
}
// 引入pinia
const userName = uesTestStore()

// 修改piniaState方法
const btnPinia = () => {
  // 第一种方法直接修改
  // userName.name = '王五'
  // userName.current = 18

  // 第二种方法 通过$patch进行批量修改state的值
  userName.$patch({
       current:200,
       name: '李四'
    })

  // 第三种方法批量修改函数形式
  //  userName.$patch((state)=>{
  //      state.current++;
  //      state.name = '李六'
  //   })

  // 第四种方法通过原始对象修改整个实例
  //  userName.$state = {
  //      current:10,
  //      name:'孙悟空'
  //   }  
  
  // 第五种方法通过actions修改 定义Actions 在actions 中直接使用this就可以指到state里面的值
  // userName.setCurrent()
}
  // 结构pinia里面state里面的值 必须的得用storeToRefs
  const { current, name } = storeToRefs(userName)
  console.log(current,name, '=====================结构pinia里面state里面的值')
</script>

<style scoped lang="scss">
.content {
  display: flex;
  margin-left: 30px;
  margin-top: 50px;
}
</style>
