<template>
    <div v-if="modelValue" class="dialog"> 
        <div class="dialog-header">
            <div>标题--{{ title }}</div>
            <div @click="close">X</div>
        </div>
        <div class="dialog-content">内容</div>
    </div>
</template>

<script lang="ts" setup>
type Props = {
    modelValue:boolean,
    title?:string,
    // 自定义修饰符
    modelModifiers?: {
        default: () => {}
        yifeng?:boolean
    }
}

const PropsDate = defineProps<Props>()


const emit = defineEmits(['update:modelValue','update:title'])

const close = ()=> {
    // 根据PropsDate.modelModifiers?.yifeng 这个属性来判断自定义修饰符
    if(PropsDate.modelModifiers?.yifeng) {
        emit('update:title','我是自定义修饰符')
    }else {
        emit('update:title','我是不是自定义修饰符')
    }
    emit('update:modelValue',false)
}
</script>

<style lang="scss" scoped>
.dialog{
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    margin-left: 20px;
    // position: fixed;
    // left:50%;
    // top:50%;
    // transform: translate(-50%,-50%);
    &-header{
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }
    &-content{
        padding: 10px;
    }
}
</style>