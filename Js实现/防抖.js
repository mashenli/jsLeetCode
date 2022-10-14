function debounce(fn, wait, immediate) {
    let timer = null;
    let flag = true;

    return function () {
        const context = this;
        const args = arguments;
        if (timer) clearTimeout(timer);
        if (immediate) {
            // 立即执行
            if (flag) {
                fn.apply(context, args);
                flag = false;
            }
            timer = setTimeout(() => {
                flag = true;
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

// 取消防抖
function debounce(func, wait, immediate) {
    var timeout = null,
        result = null
    var debounced = function () {
        var context = this
        var args = this
        if (timeout) clearTimeout(timeout)
        if (immediate) {
            // 立即执行
            if (!timeout) result = func.aplly(context, args)
            timeout = setTimeout(function () {
                timeout = null
            }, wait)
        } else {
            // 延迟执行
            timeout = setTimeout(function () {
                func.apply(context, args)
            }, wait)
        }
        return result
    }
    debounced.cancel = function () {
        clearTimeout(timeout)
        timeout = null
    }
    return debounced
}