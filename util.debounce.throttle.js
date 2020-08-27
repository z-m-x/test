/* 防抖函数  vue timer必须定义在data中*/
 export  function  debounce(fn, wait = 1000) {
     let timer=null
      return function (...args) {
        if (timer) window.clearTimeout(timer);
        timer = window.setTimeout(() => {
          fn.apply(this, args);
        }, wait);
      };
    }

/* 截留函数 */

export function throttle(fn, wait = 1000) {
    let timer=0
    return (...args)=>{
        let now =new Date().getTime()
        if (now-timer>wait){
            fn.apply(this,args)
        }
    }
}