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
function debounce(fn, wait, immediate) {
    let timer = null;

    return function () {
        const context = this;
        const args = arguments;
        if (timer) clearTimeout(timer);
        if (immediate) {
            // 立即执行
            if (!timer) {
                fn.apply(context, args);
            }
            timer = setTimeout(() => {
                timer = null;
            }, wait);
        } else {
            // 延迟执行
            timer = setTimeout(() => {
                fn.apply(context, args);
                timer = null;
            }, wait);
        }
    }
}