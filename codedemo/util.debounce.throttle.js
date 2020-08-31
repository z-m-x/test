/* 在vue中使用 timer定时器对象需要定义在data或者防抖节流函数外 */

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

/* 节流函数 */

export function throttle(fn, wait = 1000) {
    let lastTime=0
    return (...args)=>{
        let now =new Date().getTime()
        if (now-lastTime>wait){
            fn.apply(this,args)
			lastTime=now
        }
    }
}
/* 首次不执行 */

export function throttle(fn, wait = 1000) {
	let timer=null
    return (...args)=>{
		if(timer) return
		timer=setTimeout(()=>{
			 fn.apply(this,args)
			 timer=null
		},wait)
    }
}