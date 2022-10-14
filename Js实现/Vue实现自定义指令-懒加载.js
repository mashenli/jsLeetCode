Vue.directive("lazyload", {
    // 指令的定义
    bind: function (el, binding) {
        let lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry, index) => {
                let lazyImage = entry.target;
                // 相交率，默认是相对于浏览器视窗
                if (entry.intersectionRatio > 0) {
                    lazyImage.src = binding.value;
                    // 当前图片加载完之后需要去掉监听
                    lazyImageObserver.unobserve(lazyImage);
                }

            })
        })
        lazyImageObserver.observe(el);
    },
});

// bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。

// inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。

// update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。

// 我们会在稍后讨论渲染函数时介绍更多 VNodes 的细节。

// componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。

// unbind：只调用一次，指令与元素解绑时调用。

// 接下来我们来看一下钩子函数的参数 (即 el、binding、vnode 和 oldVnode)。