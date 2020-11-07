import React from 'react'
import {Router, Route} from '../src'
import {nodeTextIs} from './test-util'

describe("Smoke tests", () => {

  describe("<Router />", () => {

    it("Instantiates.", () => {
      <Router />
    })

    it("Renders text.", () => {
      nodeTextIs(<Router>here</Router>, 'here')
    })

    it("Renders text (depth 2).", () => {
      nodeTextIs(<Router><div>here</div></Router>, 'here')
    })

    it("Renders text (depth 3).", () => {
      nodeTextIs(<Router><div><div>here</div></div></Router>, 'here')
    })

    it("Renders text (depth 4).", () => {
      nodeTextIs(<Router><div><div><div>here</div></div></div></Router>, 'here')
    })

    it("Takes a path prop.", () => {
      const router = <Router path='/users' />
      expect(router.props.path).toBe('/users')
    })

  })

  describe("<Route />", () => {

    it("Instantiates.", () => {
      <Route />
    })

    it("Renders text.", () => {
      nodeTextIs(<Route>here</Route>, 'here')
    })

    it("Renders text (depth 2).", () => {
      nodeTextIs(<Route><div>here</div></Route>, 'here')
    })

    it("Renders text (depth 3).", () => {
      nodeTextIs(<Route><div><div>here</div></div></Route>, 'here')
    })

    it("Renders text (depth 4).", () => {
      nodeTextIs(<Route><div><div><div>here</div></div></div></Route>, 'here')
    })

    it("Renders 2 sibling <Routes />", () => {
      const com = (
        <>
          <Route>one</Route>
          <Route>two</Route>
        </>
      )
      nodeTextIs(com, 'onetwo')
    })

    it("Renders 3 sibling <Routes />", () => {
      const com = (
        <>
          <Route>one</Route>
          <Route>two</Route>
          <Route>three</Route>
        </>
      )
      nodeTextIs(com, 'onetwothree')
    })

  })

})
