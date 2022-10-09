// 简单版
const deepCopy = source => {
    // 判断是否为数组
    const isArray = arr => Object.prototype.toString.call(arr) === '[object Array]'
    // 判断是否为引用类型
    const isObject = obj => obj !== null && (typeof obj === 'object' || typeof obj === 'function')
    // 拷贝（递归思路）
    const copy = input => {
        if (typeof input === 'function' || !isObject(input)) return input
        const output = isArray(input) ? [] : {}
        for (let key in input) {
            if (input.hasOwnProperty(key)) {
                const value = input[key]
                output[key] = copy(value)
            }
        }
        return output
    }
    return copy(source)
}

// 针对布尔值、数值、字符串的包装对象的处理
const deepCopy1 = source => {
    // 获取数据类型（本次新增）
    const getClass = x => Object.prototype.toString.call(x)
    const isArray = arr => getClass(arr) === '[object Array]'
    const isObject = obj => obj !== null && (typeof obj === 'object' || typeof obj === 'function')
    // 判断是否为包装对象（本次新增）
    const isWrapperObject = obj => {
        const theClass = getClass(obj)
        const type = /^\[object (.*)\]$/.exec(theClass)[1]
        return ['Boolean', 'Number', 'String', 'Symbol', 'BigInt'].includes(type)
    }
    // 处理包装对象（本次新增）
    const handleWrapperObject = obj => {
        const type = getClass(obj)
        switch (type) {
            case '[object Boolean]':
                return Object(Boolean.prototype.valueOf.call(obj))
            case '[object Number]':
                return Object(Number.prototype.valueOf.call(obj))
            case '[object String]':
                return Object(String.prototype.valueOf.call(obj))
            case '[object Symbol]':
                return Object(Symbol.prototype.valueOf.call(obj))
            case '[object BigInt]':
                return Object(BigInt.prototype.valueOf.call(obj))
            default:
                return undefined
        }
    }
    // 拷贝（递归思路）
    const copy = input => {
        if (typeof input === 'function' || !isObject(input)) return input
        // 处理包装对象（本次新增）
        if (isWrapperObject(input)) {
            return handleWrapperObject(input)
        }
        const output = isArray(input) ? [] : {}
        for (let key in input) {
            if (input.hasOwnProperty(key)) {
                const value = input[key]
                output[key] = copy(value)
            }
        }
    }

    return copy(source)
}


function deepClone(target) {
    const map = new WeakMap()
    
    function isObject(target) {
        return (typeof target === 'object' && target ) || typeof target === 'function'
    }

    function clone(data) {
        if (!isObject(data)) {
            return data
        }
        if ([Date, RegExp].includes(data.constructor)) {
            return new data.constructor(data)
        }
        if (typeof data === 'function') {
            return new Function('return ' + data.toString())()
        }
        const exist = map.get(data)
        if (exist) {
            return exist
        }
        if (data instanceof Map) {
            const result = new Map()
            map.set(data, result)
            data.forEach((val, key) => {
                if (isObject(val)) {
                    result.set(key, clone(val))
                } else {
                    result.set(key, val)
                }
            })
            return result
        }
        if (data instanceof Set) {
            const result = new Set()
            map.set(data, result)
            data.forEach(val => {
                if (isObject(val)) {
                    result.add(clone(val))
                } else {
                    result.add(val)
                }
            })
            return result
        }
        const keys = Reflect.ownKeys(data)
        const allDesc = Object.getOwnPropertyDescriptors(data)
        const result = Object.create(Object.getPrototypeOf(data), allDesc)
        map.set(data, result)
        keys.forEach(key => {
            const val = data[key]
            if (isObject(val)) {
                result[key] = clone(val)
            } else {
                result[key] = val
            }
        })
        return result
    }

    return clone(target)
}
