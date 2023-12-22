import { cx } from './all'

describe('cx function', () => {
  it('joins class names into single string, excluding falsy values', () => {
    const result = cx('class1', '', 'class2', null, 'class3', undefined)
    expect(result).toEqual('class1 class2 class3')
  })

  it('returns empty string if all class names are falsy', () => {
    const result = cx(null, '', false, undefined)
    expect(result).toEqual('')
  })

  it('returns correct string when single non-falsy class name is passed', () => {
    const result = cx('singleClass')
    expect(result).toEqual('singleClass')
  })
})
