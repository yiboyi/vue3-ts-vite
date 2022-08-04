import { onMounted } from "vue";

type Options = {
    el:string
}


type Return = {
    Baseurl: string | null
}

export default function(option:Options): Promise<Return> {
    return new Promise((resolve) => {
    onMounted(() =>{
        const file:HTMLImageElement = document.querySelector(option.el) as HTMLImageElement
        console.log(file)
        file.onload = ():void => {
            resolve({
                Baseurl: toBase64(file)
            })
        }
    })
    const toBase64 = (el:HTMLImageElement):string =>{
        // 创建canvas
        const canvas:HTMLCanvasElement = document.createElement('canvas')
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
        canvas.width = el.width
        canvas.height = el.height   
        ctx.drawImage(el,0,0,canvas.width,canvas.height)
        return canvas.toDataURL('image/png')
    }
    })
}