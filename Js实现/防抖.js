/**
 * 非立即执行
 */

function debounce(fn, wait) {
    let timer = null;

    return function () {
        const context = this;
        const args = arguments;

        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(context, args);
            timer = null;
        }, wait);
    }
}

// 立即执行版本
function debounce(fn, wait) {
    let timer = null;

    return function () {
        const context = this;
        const args = arguments;

        if (!timer) {
            fn.apply(context, args);
        }
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
        }, wait);
    }
}