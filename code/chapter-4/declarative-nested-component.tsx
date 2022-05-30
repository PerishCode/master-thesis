function Example() {
  return (
    <ReactObjectField 
      name="basicInfo" 
      component={[
        Card,
        Count
      ]}>
      <ReactField 
        name="B" 
        component={[
          Item, 
          Feedbacks, 
          Input
        ]} />
    </ReactObjectField>
  );
}