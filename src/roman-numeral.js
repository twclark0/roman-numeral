module.exports = val => {
  // If val is a string, parse to number removing commas
  let valAsNumber =
    typeof val === 'string' ? Number(val.replace(/,/g, '')) : val

  // Make sure val is a number, if not return string error message
  if (
    !val ||
    typeof Number(valAsNumber) !== 'number' ||
    !Number.isInteger(valAsNumber)
  )
    return 'Please use a valid number'

  const romanConverter = val => {
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

  const romanConverterLargeValues = val => {
    // Final returned string we will modify as we go along
    let result = ''

    // Current roman numeral int value we will eventually wrap with ()
    let currentRNValueOfAThousand = ''

    // First while loop handles all multiples of 1000 within a number. For example 2,200,000,000.. will loop twice to handle the the value of 2 trillion and 200 billion values.
    while (val > 1000) {
      // initialParen handles concatenating '('
      let initialParen = ''
      // lastParen handles concatenating ')'
      let lastParen = ''
      // make copy of val param to subtract from later
      let valCopy = val
      // power variable determines to what 1000 power the val is, to determine the number of '()'s to wrap
      let power = 1
      // inner while loop handles determining number of 1000s current number is made up. For example 4000 is one multiple of 1000, loops one time
      while (val > 1000) {
        // mutates val by dividing by 1000 to decrease it's size, affecting the number of times the while loop loops
        val /= 1000
        // mutate power to stay consistent with val
        power *= 1000
        // mutate initialParen to stay consistent with val
        initialParen += '('
        // mutate lastParen to stay consistent with val
        lastParen += ')'
      }
      // Math.floor ensures we only wrap the current value with params. Has issues when numbers are not evenly divisible by 1000
      currentRNValueOfAThousand = Math.floor(val)

      // mutate val to affect the first while loop val. For example, val is set to 0 on first parent while loop for 4000... val = 4000 - (4 * 1000)
      val = valCopy - currentRNValueOfAThousand * power
      // modify result by concatenating total initialParens, the roman numeral for stripped val, and total lastParens
      result +=
        initialParen + romanConverter(currentRNValueOfAThousand) + lastParen
    }
    return result
  }

  return valAsNumber > 3999
    ? romanConverterLargeValues(valAsNumber)
    : romanConverter(valAsNumber)
}
