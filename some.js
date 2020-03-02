const A = [1,2,3,4]

const mySomeHow = (arr,f) => {
  let toReturn = []
  for (let i = 0; i < arr.length; i++){
    toReturn=f(arr[i])
  }
  return toReturn
}
const moreThanTwo = element => element > 2
const B = mySomeHow(A,moreThanTwo)



const mySomeWithReducer = (arr,f) => {
  const toReturn = f(arr)
  return toReturn
}
const moreThanTwoForReducer = arr => arr.reduce((acc, item) => (item > 2) ?  true : false, [])
const C = mySomeWithReducer(A,moreThanTwoForReducer)

