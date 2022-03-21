function evenNumbers(start, end) {
   let arr = []
   for (let i = start; i < end + 1; i++) {
      if (i % 2 == 0) {
         arr.push(i)
      }
   }
   return arr
}

module.exports = evenNumbers