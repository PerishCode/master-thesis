const submodel = {
  A: { a: 1, b: 0 }
}

const model = 
  reactive({
    C: submodel
  })

observe(() => {
  model.C.A.a = 
    model.C.A.b + 1
})