import React from 'react'
import {Router, Route} from 'state-router'
import {nodeTextIs, nodeIsEmpty} from './test-util'

describe("Basic function", () => {

  it("Renders a matching route.", () => {
    nodeTextIs(
      <Router path='/users'>
        <Route route='/users'>users</Route>
      </Router>,
      'users'
    )
  })

  it("Ignores a non-matching route.", () => {
    nodeIsEmpty(
      <Router path='/users'>
        <Route route='/not-found'>not-found</Route>
      </Router>
    )
  })

  it("Renders a matching route and ignores a non-matching route.", () => {
    nodeTextIs(
      <Router path='/users'>
        <Route route='/users'>users</Route>
        <Route route='/not-found'>not-found</Route>
      </Router>,
      'users'
    )
  })

})
