/**
* Scrivere qui il codice dell'esercizio 3 del capitolo 4 di eloquentJS
**/
const arrayToList = arr=> {
    let nested = null
    for (let i = 0; i < arr.length; i++) {
        nested = { value: arr[i], rest: nested }
    }
    return nested
}
const A =arrayToList([10, 20])

const listToArray= list=> {
  let arr = []
  for (let i = list;i; i = i.rest) {
    arr =[ 
    ...arr,
    i.value]
  }
  return arr;
}
const B = listToArray({value: 10, rest: {value: 20, rest: null}})
