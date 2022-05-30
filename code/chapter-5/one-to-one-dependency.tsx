<ObjectField name="basicInfo">
  {...}
  <Field
    name="moduleSource"
    state={{
      title: "模块源",
      value: null,
      errors: (field)=>(URL_RE.test(field.value) ? 
        ["不符合 URL 字符串规范"] : 
        [])
    }}
    components={...}
  />
  {...}
</ObjectField>