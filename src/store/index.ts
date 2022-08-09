import { defineStore } from 'pinia';
import { Names } from './store-name';

export const uesTestStore = defineStore(Names.Test,{
    state:() => {
        return {
            current:1,
            name:'小易'
        }
    },
    // 类似于computed 可以帮我们去修饰我们的值
    getters:{

    },
    // 可以操作异步和同步提交state
    actions:{
        setCurrent () {
            this.current+=3
        }

    } 
})
