[![npm version](https://badge.fury.io/js/stateful-router.svg)](https://badge.fury.io/js/stateful-router)

# stateful-router
`stateful-router` is a tiny, straightforward, declarative routing
library for React. It has two components, `<Router>` and `<Route>`. It
is unopinionated. It has no knowledge of the the URL bar, history,
Redux, or any browser APIs. You simply pass a string into the `path`
property of `<Router>`. The string can come from anywhere. Typically
it would represent some part of the current URL. `stateful-router`
does not interface with the browser.

All it does is conditionally render routes based on the `path` value
you provide.

Under the hood, `stateful-router` uses the React context API.

[License](#license)


## Table of contents
1. [Basic usage](#basic-usage)
2. [Capturing params](#capturing-params)
3. [Match exact paths](#match-exact-paths)
4. [Match multiple paths](#match-multiple-paths)
5. [Example usage with react-redux](#example-usage-with-react-redux)
6. [Navigation](#navigation)


## Basic usage
To use `stateful-router` you create a top-level `<Router>` and child
`<Route>` components:
```javascript
import {Router, Route} from 'stateful-router'

const path = '/users'

const App = () => (
  <Router path={path}>
    <Route route='/home'> ... </Route>
    <Route route='/users'> ... </Route>
  </Router>
)
```
Routes can be nested arbitrarily.
```javascript
<Router path='/users/all'>
  <Route route='/users'>
    Hello
    <Route route='/users/all'>
      World
    </Route>
  </Route>
</Router>

//  --> Hello World
```


## Capturing params
Capture params by using `:` in your routes. Params are automatically
passed as props to the immediate children of a `<Route>`.
```javascript
const UserProfile = ({name, age}) => (
  My name is {name} and my age is {age}
)

const App = () => (
  <Router path='user/bob/42'>
    <Route route='user/:name/:age'>
      <UserProfile />
    </Route>
  </Router>
)

// --> My name is bob and my age is 42
```


## Match exact paths
Match exact paths with a trailing `/` in your routes.
```javascript
<Router path='/about/us'>
  <Route route='/about'>Matches</Route>
  <Route route='/about/'>Does not match</Route>
</Router>
```


## Match multiple paths
You can pass an array into `<Route>` to match many paths.
```javascript
<Route route={['/nowhere', '/users/:id']}>
  Matches either 'nowhere' or 'users/:id'. 'nowhere'
  has priority because it was specified first.
</Route>
```
The route that matches first will be the one to provide params to its children.


## Example usage with react-redux
```javascript
const App = ({url}) => (
  <Router path={url}>
    <AppContent />
  </Router>
)

const mapState = (state) => ({
  url: state.url,
})

export default connect(mapState)(App)
```
This is just one example. `stateful-router` is not tightly bound to Redux or any
particular state management library.


## Navigation
Your state store should be the primary source of truth.
The browser's URL should derive its value from your store,
not the other way around. Your app should be able to
function in the absence of any URL bar. The URL is just
another piece of data as far as your app is concerned. To
change the URL with Redux, for example:
```javascript
// NavBar.js
const NavBar = () => (
  <div>
    <a onClick={() => dispatch(setUrl('home'))}>Home</a>
  </div>
)

// url-actions.js
const setUrl = (url) => ({
  type: 'SET_URL',
  payload: url,
})


// app.js
//
// Sync the browser's URL with your store state. For
// simplicity we're using store.subscribe(), but
// middleware would probably be more appropriate here.
store.subscribe(() => {
  const {url} = store.getState()
  if (url !== location.pathname)
    history.pushState(url)
})
```


## License
[MIT](https://www.mit.edu/~amini/LICENSE.md)
