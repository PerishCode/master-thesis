<ArrayField name="pageSchedule">
  <ObjectField name={index}>
    <ObjectField name="shareLink">
      <Field
        name="channels"
        reactions={[
          (field, path) => {
            // 通过路径回溯得到准确的前缀 pageSchedule[index].shareLink
            query(path.backtrack("..") + ".*(!channels)").forEach(
              (f) => (f.visible = field.value)
            );
          },
        ]}
      />
      <ObjectField name="weixin" />
      <ObjectField name="qq" />
    </ObjectField>
  </ObjectField>
</ArrayField>;
