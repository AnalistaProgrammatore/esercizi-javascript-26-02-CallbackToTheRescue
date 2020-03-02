
const A = [1,2,3,4]

const myFilterHow = (arr,callback) => {
  let toReturn = []
  for (let i = 0; i < arr.length; i++){
    (callback(arr[i]))?
      toReturn = [
        ...toReturn,
        ...[(arr[i])]
      ] : []
  }
  return toReturn
}

const moreThanTwo = elem => elem > 2
const B = myFilterHow(A,moreThanTwo)



const myFilterWithReducer = (arr,callback) => {
  const toReturn = callback(arr)
  return toReturn
}

const moreThanTwoForReducer = arr=> arr.reduce((cur,val)=>  val > 2 ? [...cur,val] : [])
const C = myFilterWithReducer(A,moreThanTwoForReducer)
