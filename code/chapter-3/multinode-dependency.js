// 多对一依赖：
// Set([微信分享样式.visible, QQ分享样式.visible, ...]) → 外链渠道.value
// 遍历数组项注册相应的依赖函数
get("PageSchedule").value.forEach((index) => { 

    const basePath = "PageSchedule." + index // 基准路径

    observe(() => { // 注册依赖函数
        const selectedSet = new Set(
            get(basePath+".ShareLink.ShareChannels").value)

        query(basePath+".ShareLink.*(!ShareChannels)").forEach(
            ([field,name])=>{
                // 若外链渠道中不包含目标渠道的关键字
                // 则将 visible 属性置为 false
                field.visible = selectedSet.has(name) 
        })
    })
})

// 一对多依赖：基础信息.errorCount → (All of 基础信息's child).errors
watch("BasicInfo.**", "errors", () => {
    // 函数 sumOfErrors 用于计算目标节点所有子节点的校验错误信息数
    get("BasicInfo").errorCount = sumOfErrors("BasicInfo.**")
})