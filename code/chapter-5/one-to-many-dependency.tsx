<ObjectField
  name="basicInfo"
  state={{
    title: "基础信息",
    errorCount: () =>
      watch("onFieldChange", "basicInfo.*", () =>
        sumOferrors(get("basicInfo"))
      ),
  }}
>
  {...}
</ObjectField>;
