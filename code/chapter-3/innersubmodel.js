const submodel = {
  A: {
    a: (A) => 
        A.b + 1,
    b: 0
  }
}


const model = 
  observe({
    C: submodel
  })