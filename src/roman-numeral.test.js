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
