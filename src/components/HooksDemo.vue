<template>
    <div class="hoots">
        <img id="img" src="../assets/image/avatar.png" />
        <div>hoots 将图片转换为base64</div>
    </div>
</template>

<script setup lang="ts">
import useBase64 from '../hooks/hook'
// 使用hooks将图片转换为base64
useBase64({
    el:'#img'
}).then((res)=>{
    console.log(res.Baseurl)
})
</script>
<style lang="scss" scoped>
.hoots {
width: 150px;
height: 150px;
border: 1px solid #ccc;
    img {
        width: 120px;
        height: 120px;
        text-align: center;
    }
}
</style>