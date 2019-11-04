const romannumeralScript = require('../src/roman-numeral.js')

describe('Individual values', () => {
  it("returns 'I' for 1", () => {
    expect(romannumeralScript(1)).toBe('I')
  })
  it("returns 'V' for 5", () => {
    expect(romannumeralScript(5)).toBe('V')
  })
  it("returns 'X' for 10", () => {
    expect(romannumeralScript(10)).toBe('X')
  })
  it("returns 'L' for 50", () => {
    expect(romannumeralScript(50)).toBe('L')
  })
  it("returns 'C' for 100", () => {
    expect(romannumeralScript(100)).toBe('C')
  })
  it("returns 'D' for 500", () => {
    expect(romannumeralScript(500)).toBe('D')
  })
  it("returns 'M' for 1000", () => {
    expect(romannumeralScript(1000)).toBe('M')
  })
})

describe('Negating values', () => {
  it("returns 'IV' for 4", () => {
    expect(romannumeralScript(4)).toBe('IV')
  })
  it("returns 'IX' for 9", () => {
    expect(romannumeralScript(9)).toBe('IX')
  })
  it("returns 'XL' for 40", () => {
    expect(romannumeralScript(40)).toBe('XL')
  })
  it("returns 'XC' for 90", () => {
    expect(romannumeralScript(90)).toBe('XC')
  })
  it("returns 'CD' for 400", () => {
    expect(romannumeralScript(400)).toBe('CD')
  })
  it("returns 'CM' for 900", () => {
    expect(romannumeralScript(900)).toBe('CM')
  })
})

describe('Duplicating values', () => {
  it("returns 'II' for 2", () => {
    expect(romannumeralScript(2)).toBe('II')
  })
  it("returns 'XX' for 20", () => {
    expect(romannumeralScript(20)).toBe('XX')
  })
  it("returns 'CC' for 200", () => {
    expect(romannumeralScript(200)).toBe('CC')
  })
  it("returns 'MM' for 2000", () => {
    expect(romannumeralScript(2000)).toBe('MM')
  })
})

describe('Error case ', () => {
  it('handles a number as string', () => {
    expect(romannumeralScript('2')).toBe('II')
  })
  it('handles a number as string with commas', () => {
    expect(romannumeralScript('2,000')).toBe('MM')
  })
  it('if value passed is zero', () => {
    expect(romannumeralScript(0)).toBe('Please use a valid number')
  })
  it('if value passed is a decimal number', () => {
    expect(romannumeralScript(2.3)).toBe('Please use a valid number')
  })
  it('if value passed is a infinity', () => {
    expect(romannumeralScript(Infinity)).toBe('Please use a valid number')
  })
  it('if value passed is a string', () => {
    expect(romannumeralScript('test')).toBe('Please use a valid number')
  })
  it('if value passed is a boolean', () => {
    expect(romannumeralScript(false)).toBe('Please use a valid number')
  })
  it('if value passed is undefined', () => {
    expect(romannumeralScript(undefined)).toBe('Please use a valid number')
  })
  it('if value passed is NaN', () => {
    expect(romannumeralScript(NaN)).toBe('Please use a valid number')
  })
  it('if value passed is null', () => {
    expect(romannumeralScript(null)).toBe('Please use a valid number')
  })
  it('if value passed is an object', () => {
    expect(romannumeralScript({})).toBe('Please use a valid number')
  })
})

describe('Larger than 3999 ', () => {
  describe('individual values', () => {
    it("returns '(V)' for 5000", () => {
      expect(romannumeralScript(5000)).toBe('(V)')
    })
    it("returns '(X)' for 10000", () => {
      expect(romannumeralScript(10000)).toBe('(X)')
    })
    it("returns '(L)' for 50000", () => {
      expect(romannumeralScript(50000)).toBe('(L)')
    })
    it("returns '(C)' for 100000", () => {
      expect(romannumeralScript(100000)).toBe('(C)')
    })
    it("returns '(D)' for 500000", () => {
      expect(romannumeralScript(500000)).toBe('(D)')
    })
    it("returns '(M)' for 1000000", () => {
      expect(romannumeralScript(1000000)).toBe('(M)')
    })
  })
  describe(' negating values', () => {
    it("returns '(IV)' for 4000", () => {
      expect(romannumeralScript(4000)).toBe('(IV)')
    })
    it("returns '(IX)' for 9000", () => {
      expect(romannumeralScript(9000)).toBe('(IX)')
    })
    it("returns '(XL)' for 40000", () => {
      expect(romannumeralScript(40000)).toBe('(XL)')
    })
    it("returns '(XC)' for 90000", () => {
      expect(romannumeralScript(90000)).toBe('(XC)')
    })
    it("returns '(CD)' for 400000", () => {
      expect(romannumeralScript(400000)).toBe('(CD)')
    })
    it("returns '(CM)' for 900000", () => {
      expect(romannumeralScript(900000)).toBe('(CM)')
    })
  })
  describe('Duplicating values', () => {
    it("returns '(XX)' for 20000", () => {
      expect(romannumeralScript(20000)).toBe('(XX)')
    })
    it("returns '(CC)' for 200000", () => {
      expect(romannumeralScript(200000)).toBe('(CC)')
    })
    it("returns '((II))' for 2000000", () => {
      expect(romannumeralScript(2000000)).toBe('((II))')
    })
    it("returns '(((II)))((CC))' for 2200000000", () => {
      expect(romannumeralScript(2200000000)).toBe('(((II)))((CC))')
    })
  })
})
