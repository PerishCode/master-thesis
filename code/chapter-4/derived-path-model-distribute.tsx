function Example() {
  return (
    <>
      <ReactObjectField name="basicInfo" component={BasicInfo}>
        <ReactField name="ID" component={ID} />
        <ReactField name="name" component={Name} />
        {...}
      </ReactObjectField>
      <ReactiveArrayField name="pageSchedule" {...}>
        <ReactiveObjectField name="0" {...}>
          <ReactiveObjectField name="shareLink" {...}>
            {...}
          </ReactiveObjectField>
        </ReactiveObjectField>
        {...}
      </ReactiveArrayField>
    </>
  );
}
