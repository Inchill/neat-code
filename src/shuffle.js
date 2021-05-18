/**
 * 
 */

function shuffle (arr) {
  if (!Array.isArray(arr)) throw new Error('it is not an array')
  return arr.slice().sort(() => Math.random() - 0.5)
}

console.log(shuffle(['A', 'B', 'C', 'D', 'E']))