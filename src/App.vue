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
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import DialogVue from './components/Dialog.vue';
import Directives from './components/Directives.vue'
let flag = ref<boolean>(true)
// 自定义修饰符
let isflag = ref<boolean>(true)
let title = ref<string>('我是字符串')
const changFlag = () => {
  flag.value = !flag.value
}
</script>

<style scoped lang="scss">
.content {
display: flex;
margin-left:30px;
margin-top: 50px;
}
</style>
