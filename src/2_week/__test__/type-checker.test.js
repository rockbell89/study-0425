import { typeChecker } from '../type-checker'

describe('타입 테스트', () => {
  it('string type', () => {
    expect(typeChecker('한글', 'string')).toEqual(true)
  })
  it('number type', () => {
    expect(typeChecker(10, 'number')).toEqual(true)
  })
})
