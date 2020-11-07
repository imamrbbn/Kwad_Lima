function solvingBases(number) {
  let result = ''
  let [decimal, bases] = number.split(' ')

  let basesNumber = Number(decimal).toString(Number(bases))
  basesNumber =  basesNumber.toString().toUpperCase()

  if (basesNumber.length < 8) {
    for (let i = 0 ; i <= 7 - basesNumber.length ; i++) {
      result += '0'
    }
    result += basesNumber
  } else result += basesNumber

  // let basesNumber = parseInt(bases, bases)
  // console.log(basesNumber,'bases ga yaaaa');

  return result
}

module.exports = { solvingBases }