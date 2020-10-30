import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import {Router, Route} from 'stateful-router'
import {nodeTextIs, nodeIsEmpty} from './test-util'

const User = ({id}) => <div>{id}</div>
const Person = ({name, age}) => <div>{name},{age}</div>

describe("Route", () => {
  it("Matches a param.", () => {
    nodeTextIs(
      <Router path='/users/42'>
        <Route route='/users/:id'>here</Route>
      </Router>,
      'here'
    )
  })
  it("Child retains its own props.", () => {
    nodeTextIs(
      <Router path='/users/42'>
        <Route>
          <Person name='bob' age='42' />
        </Route>
      </Router>,
      'bob,42'
    )
  })
  it("Multiple children retain their props.", () => {
    nodeTextIs(
      <Router path='/users/42'>
        <Route>
          <Person name='bob' age='42' />|<Person name='carl' age='23' />
        </Route>
      </Router>,
      'bob,42|carl,23'
    )
  })
  it("Captures and renders a param.", () => {
    nodeTextIs(
      <Router path='/users/42'>
        <Route route='/users/:id'>
          <User />
        </Route>
      </Router>,
      '42'
    )
  })
  it("Multiple routes capture and render params.", () => {
    nodeTextIs(
      <Router path='/users/42'>
        <Route route='/users/:id'>
          <User />
        </Route>
        <Route route='/users/:id'>
          <User />
        </Route>
      </Router>,
      '4242'
    )
  })
  it("Captures and renders 2 params.", () => {
    const Account = ({id, name}) => <div>{id},{name}</div>
    nodeTextIs(
      <Router path='/users/42/bob'>
        <Route route='/users/:id/:name'>
          <Account />
        </Route>
      </Router>,
      '42,bob'
    )
  })
  it("Renders one route with params; ignores another.", () => {
    nodeTextIs(
      <Router path='/users/42'>
        <Route route='/users/:id'>
          <User />
        </Route>
        <Route route='/users/archive/:id'>
          Archived users
        </Route>
      </Router>,
      '42'
    )
  })
})

describe("Route: smoke tests: rendering into DOM", () => {
  const dom = document.getElementById('test-area')
  afterEach(() => {
    unmountComponentAtNode(dom)
    dom.innerHTML = ''
  })
  it("Renders matching route.", () => {
    render(
      <Router path='/'>
        <Route route='/'>Empty</Route>
        <Route route='/lists'>/lists</Route>
      </Router>,
      dom
    )
  })
  it("Renders nothing.", () => {
    render(
      <Route route='/'>Empty</Route>,
      dom
    )
  })
  it("Renders nothing.", () => {
    render(
      <Router path='/nothing'>
        <Route route='/'>Empty</Route>,
      </Router>,
      dom
    )
  })
  it("Renders nothing.", () => {
    render(
      <Router path='nothing'>
        <Route route='/'>Empty</Route>
        <Route route='/lists'>/lists</Route>
      </Router>,
      dom
    )
  })
  it("Renders nothing.", () => {
    render(
      <div>
        <Router path='/nothing'>
          <Route route='/'>Empty</Route>,
        </Router>
      </div>,
      dom
    )
  })
})

describe("Route: array route prop", () => {
  it("Accepts an array prop.", () => {
    <Route route={[]}></Route>
  })
  it("Renders nothing.", () => {
    nodeIsEmpty(
      <Router path='/nowhere'>
        <Route route={['/here']}>here</Route>
      </Router>
    )
  })
  it("Renders.", () => {
    nodeTextIs(
      <Router path='/here'>
        <Route route={['/here']}>here</Route>
      </Router>,
      'here'
    )
  })
  it("Matches the first route.", () => {
    nodeTextIs(
      <Router path='/one'>
        <Route route={['/one', '/two']}>here</Route>
      </Router>,
      'here'
    )
  })
  it("Matches the second route.", () => {
    nodeTextIs(
      <Router path='/two'>
        <Route route={['/one', '/two']}>here</Route>
      </Router>,
      'here'
    )
  })
})

describe("Route: array route prop, getParams", () => {
  it("--", () => {

  })
})
