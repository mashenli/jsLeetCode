// 实现思路是使用递归函数，不断地去执行 setTimeout 从而达到 setInterval 的效果

const mySetInterval = (fn, timeout) => {
    let timer = {
        flag: true,
    };
    const interval = () => {
        if (timer.flag) {
            fn();
            setTimeout(interval, timeout);
        }
    }
    setTimeout(interval, timeout);
    return timer;
};