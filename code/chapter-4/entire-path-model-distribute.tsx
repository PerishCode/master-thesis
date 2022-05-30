function Example() {
  return (
    <>
      <ReactObjectField path="basicInfo" component={BasicInfo}>
        <ReactField path="basicInfo.ID" component={ID} />
        <ReactField path="basicInfo.name" component={Name} />
        {...}
      </ReactObjectField>
      <ReactiveArrayField path="pageSchedule" {...}>
        <ReactiveObjectField path="pageSchedule.0" {...}>
          <ReactiveObjectField path="pageSchedule.0.shareLink" {...}>
            {...}
          </ReactiveObjectField>
        </ReactiveObjectField>
        {...}
      </ReactiveArrayField>
    </>
  );
}
