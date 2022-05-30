function Example() {
  // basicInfo$count → basicInfo.name$errors
  return (
    <>
      <ReactObjectField name="basicInfo" component={BasicInfo}
        reactions={[
          (field)=>{
            field.count = someCalculate(get("basicInfo.name").errors)
          }
        ]}
      >
        <ReactField name="name" component={Name}/>
      </ReactObjectField>
    </>
  );
}
