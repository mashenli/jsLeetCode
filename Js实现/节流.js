// 定时器版
function throttle(fn, wait) {
    let timer = null;

    return function () {
        const context = this;
        const args = arguments;

        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(context, args);
                timer = null;
            }, wait)
        }
    }
}