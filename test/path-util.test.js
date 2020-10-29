import expect from 'expect'
import {__internals, isMatch, getParams} from 'stateful-router/path-util'

const {exists, split, isParam, isSubMatch} = __internals

describe("path-util", () => {

  describe("exists", () => {
    it("exists(1) -> true", () => {
      expect(exists(1)).toBe(true)
    })
    it("exists('') -> false", () => {
      expect(exists('')).toBe(false)
    })
    it("exists(null) -> false", () => {
      expect(exists(null)).toBe(false)
    })
    it("exists(undefined) -> false", () => {
      expect(exists(undefined)).toBe(false)
    })
    it("exists('hello') -> true", () => {
      expect(exists('hello')).toBe(true)
    })
  })

  describe("split", () => {
    it("split('/one') -> ['one']", () => {
      expect(split('/one')).toEqual(['one'])
    })
    it("split('/one/') -> ['one']", () => {
      expect(split('/one')).toEqual(['one'])
    })
    it("split('/one/two') -> ['one', 'two]", () => {
      expect(split('/one/two')).toEqual(['one', 'two'])
    })
    it("split('/one/two/') -> ['one', 'two]", () => {
      expect(split('/one/two/')).toEqual(['one', 'two'])
    })
    it("split('/one/two/three') -> ['one', 'two', 'three]", () => {
      expect(split('/one/two/three')).toEqual(['one', 'two', 'three'])
    })
    it("split('/one/two/three/') -> ['one', 'two', 'three]", () => {
      expect(split('/one/two/three/')).toEqual(['one', 'two', 'three'])
    })
    it("split('/:id') -> [':id']", () => {
      expect(split('/:id')).toEqual([':id'])
    })
    it("split('/one/:id') -> ['one', ':id']", () => {
      expect(split('/one/:id')).toEqual(['one', ':id'])
    })
    it("split('/one/:id/') -> ['one', ':id']", () => {
      expect(split('/one/:id/')).toEqual(['one', ':id'])
    })
  })

  describe("isParam", () => {
    it("isParam('foo') -> false", () => {
      expect(isParam('foo')).toBe(false)
    })
    it("isParam(':foo') -> true", () => {
      expect(isParam(':foo')).toBe(true)
    })
  })

  describe("isSubMatch", () => {
    it("isSubMatch('one', 'one') -> true", () => {
      expect(isSubMatch('one', 'one')).toBe(true)
    })
    it("isSubMatch('one', ':id') -> true", () => {
      expect(isSubMatch('one', ':id')).toBe(true)
    })
    it("isSubMatch('one', 'two') -> false", () => {
      expect(isSubMatch('one', 'two')).toBe(false)
    })
  })

  describe("isMatch", () => {
    it("isMatch('', '/') -> true", () => {
      expect(
        isMatch('', '/')
      ).toBe(true)
    })
    it("isMatch('/', '/') -> true", () => {
      expect(
        isMatch('/', '/')
      ).toBe(true)
    })
    it("isMatch('/one', '/one') -> true", () => {
      expect(
        isMatch('/one', '/one')
      ).toBe(true)
    })
    it("isMatch('/one/two', '/one/two') -> true", () => {
      expect(
        isMatch('/one/two', '/one/two')
      ).toBe(true)
    })
    it("isMatch('/one', '/one/') -> true", () => {
      expect(
        isMatch('/one', '/one/')
      ).toBe(true)
    })
    it("isMatch('/one', '/:id') -> true", () => {
      expect(
        isMatch('/one', '/:id')
      ).toBe(true)
    })
    it("isMatch('/one/two', '/one/:id') -> true", () => {
      expect(
        isMatch('/one/two', '/one/:id')
      ).toBe(true)
    })
    it("isMatch('/one/two', '/:id/two') -> true", () => {
      expect(
        isMatch('/one/two', '/:id/two')
      ).toBe(true)
    })
    it("isMatch('/one/two', '/:a/:b') -> true", () => {
      expect(
        isMatch('/one/two', '/:a/:b')
      ).toBe(true)
    })
    it("isMatch('/one/two', '/one') -> true", () => {
      expect(
        isMatch('/one/two', '/one')
      ).toBe(true)
    })
    it("isMatch('/one/two', '/one/') -> false", () => {
      expect(
        isMatch('/one/two', '/one/')
      ).toBe(false)
    })
    it("isMatch('/42/new', '/:id') -> true", () => {
      expect(
        isMatch('/42/new', '/:id')
      ).toBe(true)
    })
    it("isMatch('/42/new', '/:id/') -> false", () => {
      expect(
        isMatch('/42/new', '/:id/')
      ).toBe(false)
    })
  })

  describe("getParams", () => {
    it("getParams", () => {
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
