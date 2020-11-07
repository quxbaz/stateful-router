import {__internals, isMatch, getParams} from 'path-util'
const {exists, split, isParam, isSubMatch} = __internals

describe("path-util", () => {

  describe("exists", () => {
    test("exists('') -> false", () => {
      expect(exists('')).toBe(false)
    })
    test("exists('hello') -> true", () => {
      expect(exists('hello')).toBe(true)
    })
  })

  describe("split", () => {
    test("split('/one') -> ['one']", () => {
      expect(split('/one')).toEqual(['one'])
    })
    test("split('/one/') -> ['one']", () => {
      expect(split('/one')).toEqual(['one'])
    })
    test("split('/one/two') -> ['one', 'two]", () => {
      expect(split('/one/two')).toEqual(['one', 'two'])
    })
    test("split('/one/two/') -> ['one', 'two]", () => {
      expect(split('/one/two/')).toEqual(['one', 'two'])
    })
    test("split('/one/two/three') -> ['one', 'two', 'three]", () => {
      expect(split('/one/two/three')).toEqual(['one', 'two', 'three'])
    })
    test("split('/one/two/three/') -> ['one', 'two', 'three]", () => {
      expect(split('/one/two/three/')).toEqual(['one', 'two', 'three'])
    })
    test("split('/:id') -> [':id']", () => {
      expect(split('/:id')).toEqual([':id'])
    })
    test("split('/one/:id') -> ['one', ':id']", () => {
      expect(split('/one/:id')).toEqual(['one', ':id'])
    })
    test("split('/one/:id/') -> ['one', ':id']", () => {
      expect(split('/one/:id/')).toEqual(['one', ':id'])
    })
  })

  describe("isParam", () => {
    test("isParam('foo') -> false", () => {
      expect(isParam('foo')).toBe(false)
    })
    test("isParam(':foo') -> true", () => {
      expect(isParam(':foo')).toBe(true)
    })
  })

  describe("isSubMatch", () => {
    test("isSubMatch('one', 'one') -> true", () => {
      expect(isSubMatch('one', 'one')).toBe(true)
    })
    test("isSubMatch('one', ':id') -> true", () => {
      expect(isSubMatch('one', ':id')).toBe(true)
    })
    test("isSubMatch('one', 'two') -> false", () => {
      expect(isSubMatch('one', 'two')).toBe(false)
    })
  })

  describe("isMatch", () => {
    test("isMatch('', '/') -> true", () => {
      expect(
        isMatch('', '/')
      ).toBe(true)
    })
    test("isMatch('/', '/') -> true", () => {
      expect(
        isMatch('/', '/')
      ).toBe(true)
    })
    test("isMatch('/one', '/') -> false", () => {
      expect(
        isMatch('/one', '/')
      ).toBe(false)
    })
    test("isMatch('/one', '/one') -> true", () => {
      expect(
        isMatch('/one', '/one')
      ).toBe(true)
    })
    test("isMatch('/one/two', '/one/two') -> true", () => {
      expect(
        isMatch('/one/two', '/one/two')
      ).toBe(true)
    })
    test("isMatch('/one', '/one/') -> true", () => {
      expect(
        isMatch('/one', '/one/')
      ).toBe(true)
    })
    test("isMatch('/one', '/:id') -> true", () => {
      expect(
        isMatch('/one', '/:id')
      ).toBe(true)
    })
    test("isMatch('/one/two', '/one/:id') -> true", () => {
      expect(
        isMatch('/one/two', '/one/:id')
      ).toBe(true)
    })
    test("isMatch('/one/two', '/:id/two') -> true", () => {
      expect(
        isMatch('/one/two', '/:id/two')
      ).toBe(true)
    })
    test("isMatch('/one/two', '/:a/:b') -> true", () => {
      expect(
        isMatch('/one/two', '/:a/:b')
      ).toBe(true)
    })
    test("isMatch('/one/two', '/one') -> true", () => {
      expect(
        isMatch('/one/two', '/one')
      ).toBe(true)
    })
    test("isMatch('/one/two', '/one/') -> false", () => {
      expect(
        isMatch('/one/two', '/one/')
      ).toBe(false)
    })
    test("isMatch('/42/new', '/:id') -> true", () => {
      expect(
        isMatch('/42/new', '/:id')
      ).toBe(true)
    })
    test("isMatch('/42/new', '/:id/') -> false", () => {
      expect(
        isMatch('/42/new', '/:id/')
      ).toBe(false)
    })
  })

  describe("getParams", () => {
    test("getParams", () => {
      expect(getParams(
        '/one',
        '/one'
      )).toEqual({})
      expect(getParams(
        '/one',
        '/one/two'
      )).toEqual({})
      expect(getParams(
        '/one/two',
        '/one/two'
      )).toEqual({})
      expect(getParams(
        '/one',
        '/:id'
      )).toEqual({id: 'one'})
      expect(getParams(
        '/one/two',
        '/:a/:b'
      )).toEqual({a: 'one', b: 'two'})
      expect(getParams(
        '/one/two/three',
        '/:a/:b/:c'
      )).toEqual({a: 'one', b: 'two', c: 'three'})
      expect(getParams(
        '/one/two/three',
        '/:a/two/three'
      )).toEqual({a: 'one'})
      expect(getParams(
        '/one/two/three',
        '/:a/:b/three'
      )).toEqual({a: 'one', b: 'two'})
      expect(getParams(
        '/one/two/three',
        '/one/:b/three'
      )).toEqual({b: 'two'})
    })
  })

})
