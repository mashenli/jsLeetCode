/** 
 * 1.写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b 的时间，然后写一个 myClear，停止上面的 mySetInterVal
 */

const mySetInterVal = (fn, a, b) => {
    let timer = null;
    const setTimer = (fn, a, b) => {
        timer = setTimeout(() => {
            fn();
            console.log('间隔了' + a + 'ms');
            setTimer(fn, a + b, b);
        }, a)
    }
    setTimer(fn, a, b);
    return timer;
}
  
const myClear = (timer) => {
    clearTimeout(timer);
}
const timer = mySetInterVal(() => {
    console.log('执行函数')
}, 200, 300);

setTimeout(() => {
    myClear(timer);
}, 2000)