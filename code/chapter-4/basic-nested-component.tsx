// basicInfo
function BasicInfo(){...} 

// basicInfo.name  
function Name(){...}


function Example() {
  return (
    <ReactObjectField 
      name="basicInfo" 
      component={BasicInfo}>
      <ReactField 
        name="name" 
        component={Name} />
    </ReactObjectField>
  );
}