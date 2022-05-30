// 模型定义
const model = reactive({
    value: "123"
})

// 响应式组件封装
Observation.memo(()=>{
    const value = model.value

    return <Input 
      value={value} 
      onChange={v=>model.value=v}/>
})