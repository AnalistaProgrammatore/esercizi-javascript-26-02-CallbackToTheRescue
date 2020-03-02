/**
* Scrivere qui il codice dell'esercizio 1 del capitolo 4 di eloquentJS
**/
const range = (start, stop, step) => Array.from({ length: (stop - start) / step }, (v, i) => start + (i * step))
const rangeA = range(0,10,1)

const range = (start= 0, stop= 10, step= 1) => Array.from({ length: (stop - start) / step }, (v, i) => start + (i * step))
const rangeB = range()

const range = (start, stop, step) => Array.from({ length: (stop - start) / step }, (v, i) => start + (i * step)).reduce((a,b) => a+b)
const rangeC =range(0,10,1)
