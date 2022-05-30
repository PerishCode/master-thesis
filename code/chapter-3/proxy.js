const basicObject = {
    a: 1,
    b: 2,
    c: 3
}

// 创建对象代理
const proxyObject = new Proxy(basicObject, {
    // 重写 get 方法
    get(target, key) {
        console.log("get basicObject's", key, "attribute");
        return Reflect.get(target, key)
    },
    // 重写 set 方法
    set(target, key, value) {
        console.log("set basicObject's", key, "attribute to", value);
        return Reflect.set(target, key, value)
    },
})