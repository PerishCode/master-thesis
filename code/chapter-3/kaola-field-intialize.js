const model = ObjectField({
    value: {
        "PageSchedule": ArrayField({
            title: "页面排期",
            value: [ObjectField({
                "ShareLink": ObjectField({
                    title: "页面外链",
                    value: {
                        "ShareChannels": Field({
                            title: "外链渠道",
                            value: []
                        })
                    }
                }),
            })]
        })
    }
})