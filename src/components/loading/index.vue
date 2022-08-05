<template>
    <div v-if="isShow" class="loading">
        <div class="loading-content">Loading...</div>
    </div>
</template>

<script setup lang="ts">
let isShow = ref<boolean>(false)

const show = () => {
    isShow.value = true
}

const hide = () => {
    isShow.value = false
}


//对外暴露 当前组件的属性和方法
defineExpose({
    isShow,
    show,
    hide
})

</script>

<style lang="scss" scoped>
.loading {
    position: fixed;
    inset: 0;
    background: rgb(0, 0, 0,0.8);
    display: flex;
    justify-content: content;
    align-items: center;
    .loading-content {
        font-size: 30px;
        color: #fff;
    }
}
</style>