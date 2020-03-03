const A = [1,2,3,4]
const myReduce = (arr, initialValue,reducer) => {
  if(arr.length === 0) {
    return initialValue;
  }else {
    const [first, ...rest] = arr
    const update = reducer(initialValue,first)
    return myReduce (rest,update,reducer)
  }
}
const sum = ((a,b) => a+b)
const even = ((a,b) => b % 2 === 0)
const B = myReduce(A,0,sum)
const C = myReduce(A,0,even)
