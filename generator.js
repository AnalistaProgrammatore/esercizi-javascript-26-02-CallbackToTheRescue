
const generator = (...arr) =>  arr
const A=generator(40,30,10,2,3,4,6)


function generator2(...args) {
  return Array.from(args);
}
const B=generator2(40,30,10,2,3,4,6)
