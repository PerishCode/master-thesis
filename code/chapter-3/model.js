// 创建数据模型
const model = 
  reactive({
    A: { 
      a: 1, 
      b: 0 
    }
  })
// 注册依赖函数
observe(() => {
    model.A.a = 
      model.A.b + 1
})