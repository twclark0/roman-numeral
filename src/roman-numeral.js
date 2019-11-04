module.exports = val => {
  // key shows base Roman numerals and it's negation options
  const romanKey = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  // initial romanNumeral string to modify
  let romanNumeral = ''

  for (let x of Object.keys(romanKey)) {
    // loop over all 13 options within romanKey
    while (val >= romanKey[x]) {
      // while param val is greater than or equal to current romanKey value
      romanNumeral += x
      // concat the romanNumeral string with current romanNumeral symbol
      val -= romanKey[x]
      // subtract param value with current roman symbol int value
    }
  }

  return romanNumeral
}
