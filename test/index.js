// import expect from 'expect'
// import React from 'react'
// import {render} from 'react-dom'
// import {Router, Route, pathUtil} from 'state-router'

import './smoke.test'
import './basic-function.test'
import './path-util.test'
import './Router.test'
import './Route.test'

// describe("util", () => {

//   describe("stripSlashes(string)", () => {
//     it("'' -> ''", () => {
//       expect(
//         util.stripSlashes('')
//       ).toEqual('')
//     })
//     it("dogs -> dogs", () => {
//       expect(
//         util.stripSlashes('dogs')
//       ).toEqual('dogs')
//     })
//     it("/dogs -> dogs", () => {
//       expect(
//         util.stripSlashes('/dogs')
//       ).toEqual('dogs')
//     })
//     it("dogs/ -> dogs", () => {
//       expect(
//         util.stripSlashes('dogs/')
//       ).toEqual('dogs')
//     })
//     it("/dogs/ -> dogs", () => {
//       expect(
//         util.stripSlashes('/dogs/')
//       ).toEqual('dogs')
//     })
//     it("//dogs// -> /dogs/", () => {
//       expect(
//         util.stripSlashes('//dogs//')
//       ).toEqual('/dogs/')
//     })
//   })

//   describe("compare(route, path)", () => {
//     it("('', '') -> true", () => {
//       expect(
//         util.compare('', '')
//       ).toEqual(true)
//     })
//     it("(foo, '') -> false", () => {
//       expect(
//         util.compare('foo', '')
//       ).toEqual(false)
//     })
//     it("(foo, bar) -> false", () => {
//       expect(
//         util.compare('foo', 'bar')
//       ).toEqual(false)
//     })
//     it("(foo, foo) -> true", () => {
//       expect(
//         util.compare('foo', 'foo')
//       ).toEqual(true)
//     })
//     it("(foo, foo) -> true", () => {
//       expect(
//         util.compare('foo', 'foo')
//       ).toEqual(true)
//     })
//     it("(:id, myid) -> {id: myid}", () => {
//       expect(
//         util.compare(':id', 'myid')
//       ).toEqual({id: 'myid'})
//     })
//   })

//   describe("consumePath(route, path)", () => {
//     it("(/, '')", () => {
//       expect(
//         util.consumePath('/', '')
//       ).toEqual({
//         matched: true,
//         nextPath: '',
//         params: {}
//       })
//     })
//     it("(/, /)", () => {
//       expect(
//         util.consumePath('/', '/')
//       ).toEqual({
//         matched: true,
//         nextPath: '',
//         params: {}
//       })
//     })
//     it("(dogs, dogs)", () => {
//       expect(
//         util.consumePath('dogs', 'dogs')
//       ).toEqual({
//         matched: true,
//         nextPath: '',
//         params: {}
//       })
//     })
//     it("(/dogs, dogs)", () => {
//       expect(
//         util.consumePath('/dogs', 'dogs')
//       ).toEqual({
//         matched: true,
//         nextPath: '',
//         params: {}
//       })
//     })
//     it("(dogs, /dogs)", () => {
//       expect(
//         util.consumePath('dogs', '/dogs')
//       ).toEqual({
//         matched: true,
//         nextPath: '',
//         params: {}
//       })
//     })
//     it("(dogs/, dogs)", () => {
//       expect(
//         util.consumePath('dogs/', 'dogs')
//       ).toEqual({
//         matched: true,
//         nextPath: '',
//         params: {}
//       })
//     })
//     it("(dogs, dogs/)", () => {
//       expect(
//         util.consumePath('dogs', 'dogs/')
//       ).toEqual({
//         matched: true,
//         nextPath: '',
//         params: {}
//       })
//     })
//     it("(/dogs/, dogs)", () => {
//       expect(
//         util.consumePath('/dogs/', 'dogs')
//       ).toEqual({
//         matched: true,
//         nextPath: '',
//         params: {}
//       })
//     })
//     it("(dogs, /dogs/)", () => {
//       expect(
//         util.consumePath('dogs', '/dogs/')
//       ).toEqual({
//         matched: true,
//         nextPath: '',
//         params: {}
//       })
//     })
//     it("(/dogs, dogs/)", () => {
//       expect(
//         util.consumePath('/dogs', 'dogs/')
//       ).toEqual({
//         matched: true,
//         nextPath: '',
//         params: {}
//       })
//     })
//     it("(dogs/, /dogs)", () => {
//       expect(
//         util.consumePath('dogs/', '/dogs')
//       ).toEqual({
//         matched: true,
//         nextPath: '',
//         params: {}
//       })
//     })
//     it("(dogs/labs, dogs/labs)", () => {
//       expect(
//         util.consumePath('dogs/labs', 'dogs/labs')
//       ).toEqual({
//         matched: true,
//         nextPath: '',
//         params: {}
//       })
//     })
//     it("(foo, dogs/labs)", () => {
//       expect(
//         util.consumePath('foo', 'dogs/labs')
//       ).toEqual({
//         matched: false,
//         nextPath: 'dogs/labs',
//         params: {}
//       })
//     })
//     it("(dogs, dogs/labs)", () => {
//       expect(
//         util.consumePath('dogs', 'dogs/labs')
//       ).toEqual({
//         matched: true,
//         nextPath: 'labs',
//         params: {}
//       })
//     })
//     it("(labs, dogs/labs)", () => {
//       expect(
//         util.consumePath('labs', 'dogs/labs')
//       ).toEqual({
//         matched: false,
//         nextPath: 'dogs/labs',
//         params: {}
//       })
//     })
//     it("(dogs/labs, dogs/labs/all)", () => {
//       expect(
//         util.consumePath('dogs/labs', 'dogs/labs/all')
//       ).toEqual({
//         matched: true,
//         nextPath: 'all',
//         params: {}
//       })
//     })
//     it("(dogs/labs/all, dogs/labs)", () => {
//       expect(
//         util.consumePath('dogs/labs/all', 'dogs/labs')
//       ).toEqual({
//         matched: false,
//         nextPath: 'dogs/labs',
//         params: {}
//       })
//     })
//     describe("Params", () => {
//       it("(:id, foo)", () => {
//         expect(
//           util.consumePath(':id', 'foo')
//         ).toEqual({
//           matched: true,
//           nextPath: '',
//           params: {id: 'foo'}
//         })
//       })
//       it("(users/:id, users)", () => {
//         expect(
//           util.consumePath('users/:id', 'users')
//         ).toEqual({
//           matched: false,
//           nextPath: 'users',
//           params: {}
//         })
//       })
//       it("(users/:id, users/42)", () => {
//         expect(
//           util.consumePath('users/:id', 'users/42')
//         ).toEqual({
//           matched: true,
//           nextPath: '',
//           params: {id: '42'}
//         })
//       })
//       it("(users/:id/:name, users/42/bob)", () => {
//         expect(
//           util.consumePath('users/:id/:name', 'users/42/bob')
//         ).toEqual({
//           matched: true,
//           nextPath: '',
//           params: {id: '42', name: 'bob'}
//         })
//       })
//       it("(users/:id/profile, users/42/profile)", () => {
//         expect(
//           util.consumePath('users/:id/profile', 'users/42/profile')
//         ).toEqual({
//           matched: true,
//           nextPath: '',
//           params: {id: '42'}
//         })
//       })
//       it("(users/:id, users/42/profile)", () => {
//         expect(
//           util.consumePath('users/:id', 'users/42/profile')
//         ).toEqual({
//           matched: true,
//           nextPath: 'profile',
//           params: {id: '42'}
//         })
//       })
//       it("(users/:id/profile/:pw, users/42/profile/hunter2)", () => {
//         expect(
//           util.consumePath('users/:id/profile/:pw', 'users/42/profile/hunter2')
//         ).toEqual({
//           matched: true,
//           nextPath: '',
//           params: {id: '42', pw: 'hunter2'}
//         })
//       })
//     })
//   })

// })

// describe("Router", () => {

//   let node, says, isEmpty

//   beforeEach(() => {
//     node = document.createElement('div')
//     says = nodeSays(node)
//     isEmpty = nodeIsEmpty(node)
//   })

//   it("Renders with a className prop", (done) => {
//     const router = <Router className="my-router" path="" />
//     expect(router.props.className).toEqual('my-router')
//     render(
//       router,
//       node,
//       () => {
//         expect(
//           node.querySelector('.my-router')
//         ).toExist()
//         done()
//       }
//     )
//   })

//   it("Renders with a default className prop", () => {
//     const router = <Router path="" />
//     expect(router.props.className).toEqual('')
//   })

//   it("Renders with a style prop", () => {
//     const router = <Router style={{foo: 42}} path="" />
//     expect(router.props.style).toEqual({foo: 42})
//   })

//   it("Renders with a default style prop", () => {
//     const router = <Router path="" />
//     expect(router.props.style).toEqual({})
//   })

//   it("Renders children.", (done) => {
//     render(
//       <Router path="">hello</Router>,
//       node,
//       () => {
//         says('hello')
//         done()
//       }
//     )
//   })

//   it("Can render null children.", (done) => {
//     render(
//       <Router path="">{null}<div>hello</div></Router>,
//       node,
//       () => {
//         says('hello')
//         done()
//       }
//     )
//   })

//   it("Can render undefined children.", (done) => {
//     render(
//       <Router path="">{undefined}<div>hello</div></Router>,
//       node,
//       () => {
//         says('hello')
//         done()
//       }
//     )
//   })

//   it("Passes path as context to child components.", (done) => {
//     class NewRoute extends Route {
//       componentDidMount() {
//         expect(this.context).toEqual({path: 'foo'})
//         done()
//       }
//     }
//     render(
//       <Router path="foo">
//         <NewRoute route="foo" />
//       </Router>,
//       node
//     )
//   })
// })

// describe("Route", () => {

//   let node, says, isEmpty

//   beforeEach(() => {
//     node = document.createElement('div')
//     says = nodeSays(node)
//     isEmpty = nodeIsEmpty(node)
//   })

//   describe("Props", () => {
//     it("Renders with a className prop", () => {
//       const route = <Route className="route" route="" />
//       expect(route.props.className).toEqual('route')
//     })
//     it("Renders with a default className prop", () => {
//       const route = <Route route="" />
//       expect(route.props.className).toEqual('')
//     })
//     it("Renders with a style prop", () => {
//       const route = <Route style={{foo: 42}} route="" />
//       expect(route.props.style).toEqual({foo: 42})
//     })
//     it("Renders with a default style prop", () => {
//       const route = <Route route="" />
//       expect(route.props.style).toEqual({})
//     })
//   })

//   describe("Passing next path as context to child components.", (done) => {
//     it("Passes path to child components after consuming it.", (done) => {
//       class NewRoute extends Route {
//         componentDidMount() {
//           expect(this.context.path).toEqual('all')
//           done()
//         }
//       }
//       render(
//         <Router path="users/all">
//           <Route route="users">
//             <NewRoute route="all" />
//           </Route>
//         </Router>,
//         node
//       )
//     })
//   })

//   describe("Renders various routes.", () => {
//     it("(url: foo/bar) (route: users) -> fail", (done) => {
//       render(
//         <Router path="foo/bar">
//           <Route route="users">hello</Route>
//         </Router>,
//         node,
//         () => {
//           isEmpty()
//           done()
//         }
//       )
//     })
//     it("(url: users) (route: users/all) -> fail", (done) => {
//       render(
//         <Router path="users">
//           <Route route="users/all">hello</Route>
//         </Router>,
//         node,
//         () => {
//           isEmpty()
//           done()
//         }
//       )
//     })
//     it("(url: users/) (route: users) -> success", (done) => {
//       render(
//         <Router path="users/">
//           <Route route="users">hello</Route>
//         </Router>,
//         node,
//         () => {
//           says('hello')
//           done()
//         }
//       )
//     })
//     it("(url: users/all/) (route: users/all) -> success", (done) => {
//       render(
//         <Router path="users/all/">
//           <Route route="users/all">hello</Route>
//         </Router>,
//         node,
//         () => {
//           says('hello')
//           done()
//         }
//       )
//     })
//     it("(url: users/all) (route: users/all/) -> success", (done) => {
//       render(
//         <Router path="users/all">
//           <Route route="users/all/">hello</Route>
//         </Router>,
//         node,
//         () => {
//           says('hello')
//           done()
//         }
//       )
//     })
//     it("(url: users/all/) (route: users/all/) -> success", (done) => {
//       render(
//         <Router path="users/all/">
//           <Route route="users/all/">hello</Route>
//         </Router>,
//         node,
//         () => {
//           says('hello')
//           done()
//         }
//       )
//     })
//     it("(url: /users) (route: users) -> success", (done) => {
//       render(
//         <Router path="/users">
//           <Route route="users">hello</Route>
//         </Router>,
//         node,
//         () => {
//           says('hello')
//           done()
//         }
//       )
//     })
//     it("(url: users) (route: users) -> success", (done) => {
//       render(
//         <Router path="users">
//           <Route route="users">hello</Route>
//         </Router>,
//         node,
//         () => {
//           says('hello')
//           done()
//         }
//       )
//     })
//     it("(url: users/all) (route: users/all) -> success", (done) => {
//       render(
//         <Router path="users/all">
//           <Route route="users/all">hello</Route>
//         </Router>,
//         node,
//         () => {
//           says('hello')
//           done()
//         }
//       )
//     })
//     it("(url: users/all) (route: users/all) w/ discrete routes -> success", (done) => {
//       render(
//         <Router path="users/all">
//           <Route route="users">
//             users/
//             <Route route="all">all</Route>
//           </Route>
//         </Router>,
//         node,
//         () => {
//           says('users/all')
//           done()
//         }
//       )
//     })
//     it("(url: users/all) (route: users/all) w/ sibling route -> success", (done) => {
//       render(
//         <Router path="users/all">
//           <Route route="users">
//             users/
//             <Route route="all">all</Route>
//             <Route route="none">none</Route>
//           </Route>
//         </Router>,
//         node,
//         () => {
//           says('users/all')
//           done()
//         }
//       )
//     })
//     it("(url: users/all) (route: users/all) w/ multiple sibling routes -> success", (done) => {
//       render(
//         <Router path="users/all">
//           <Route route="users">
//             users/
//             <Route route="all">all</Route>
//             <Route route="some">some</Route>
//             <Route route="none">none</Route>
//           </Route>
//         </Router>,
//         node,
//         () => {
//           says('users/all')
//           done()
//         }
//       )
//     })
//     it("(url: users/all/first) (route: users/all/first) -> success", (done) => {
//       render(
//         <Router path="users/all/first">
//           <Route route="users">
//             users/
//             <Route route="all">
//               all/
//               <Route route="first">first</Route>
//               <Route route="last">last</Route>
//               <Route route="/">index</Route>
//             </Route>
//           </Route>
//         </Router>,
//         node,
//         () => {
//           says('users/all/first')
//           done()
//         }
//       )
//     })
//   })

//   describe("Renders the special index route. ", () => {
//     it("(url: /) (route: /) -> success", (done) => {
//       render(
//         <Router path="/">
//           <Route route="/">index</Route>
//         </Router>,
//         node,
//         () => {
//           says('index')
//           done()
//         }
//       )
//     })
//     it("(url: dogs) (route: /) -> fail", (done) => {
//       render(
//         <Router path="dogs">
//           <Route route="/">index</Route>
//         </Router>,
//         node,
//         () => {
//           isEmpty()
//           done()
//         }
//       )
//     })
//     it("(url: dogs) (route: dogs/index) -> success", (done) => {
//       render(
//         <Router path="dogs">
//           <Route route="dogs">
//             <Route route="/">index</Route>
//           </Route>
//         </Router>,
//         node,
//         () => {
//           says('index')
//           done()
//         }
//       )
//     })
//     it("(url: dogs) (route: dogs/index) -> success", (done) => {
//       render(
//         <Router path="dogs">
//           <Route route="dogs">
//             <Route route="/">index</Route>
//             <Route route="cute">cute</Route>
//           </Route>
//         </Router>,
//         node,
//         () => {
//           says('index')
//           done()
//         }
//       )
//     })
//     it("(url: dogs/cute) (route: dogs/cute/index) -> success", (done) => {
//       render(
//         <Router path="dogs/cute">
//           <Route route="dogs">
//             <Route route="/">index</Route>
//             <Route route="cute">
//               <Route route="/">cute index</Route>
//               <Route route="all">all</Route>
//             </Route>
//           </Route>
//         </Router>,
//         node,
//         () => {
//           says('cute index')
//           done()
//         }
//       )
//     })
//   })

//   describe("Renders routes with parameters.", () => {
//     it("(url: user/1) (route: user/:id) -> success", (done) => {
//       render(
//         <Router path="user/1">
//           <Route route="user/:id">hello</Route>
//         </Router>,
//         node,
//         () => {
//           says('hello')
//           done()
//         }
//       )
//     })
//     it("(url: user/1/profile) (route: user/:id/profile) -> success", (done) => {
//       render(
//         <Router path="user/1/profile">
//           <Route route="user/:id/profile">hello</Route>
//         </Router>,
//         node,
//         () => {
//           says('hello')
//           done()
//         }
//       )
//     })
//     it("(url: user/1/profile) (route: user/:id/profile) w/ sub route -> success", (done) => {
//       render(
//         <Router path="user/1/profile">
//           <Route route="user/:id">
//             hello
//             <Route route="profile">there</Route>
//           </Route>
//         </Router>,
//         node,
//         () => {
//           says('hellothere')
//           done()
//         }
//       )
//     })
//   })

//   describe("Prop relations", () => {
//     it("Passes parameter values to child components as context.", (done) => {
//       const Foo = (props, context) => {
//         expect(context.params).toEqual({id: 'secret'})
//         done()
//         return <div />
//       }
//       Foo.contextTypes = {
//         params: React.PropTypes.object
//       }
//       render(
//         <Router path="secret">
//           <Route route=":id">
//             <Foo />
//           </Route>
//         </Router>,
//         node
//       )
//     })
//     it("Child component retains its props.", (done) => {
//       const Foo = (props, context) => {
//         expect(props).toEqual({
//           foo: 'foo',
//           bar: 'bar',
//           id: 'secret'
//         })
//         expect(context.params).toEqual({
//           id: 'secret'
//         })
//         done()
//         return <div />
//       }
//       Foo.contextTypes = {
//         params: React.PropTypes.object
//       }
//       render(
//         <Router path="secret">
//           <Route route=":id">
//             <Foo foo={'foo'} bar={'bar'} />
//           </Route>
//         </Router>,
//         node
//       )
//     })
//     it("Passes multiple params to context.", (done) => {
//       const Foo = (props, context) => {
//         expect(context.params).toEqual({
//           id: '42',
//           name: 'dog',
//           pw: 'hunter2'
//         })
//         done()
//         return <div />
//       }
//       Foo.contextTypes = {
//         params: React.PropTypes.object
//       }
//       render(
//         <Router path="user/42/dog/hunter2">
//           <Route route="user/:id/:name/:pw">
//             <Foo />
//           </Route>
//         </Router>,
//         node
//       )
//     })
//   })

//   describe("Passing params into props.", () => {
//     it("Passes parameter values to child components as props.", (done) => {
//       let flag = {}
//       const Foo = (props) => {
//         expect(props).toEqual({
//           id: '42',
//           name: 'dog',
//         })
//         flag.foo = true
//         if (flag.foo && flag.bar)
//           done()
//         return null
//       }
//       const Bar = (props) => {
//         expect(props).toEqual({
//           id: '42',
//           name: 'dog',
//         })
//         flag.bar = true
//         if (flag.foo && flag.bar)
//           done()
//         return null
//       }
//       render(
//         <Router path="user/42/dog">
//           <Route route="user/:id/:name">
//             <Foo />
//             <Bar />
//           </Route>
//         </Router>,
//         node
//       )
//     })
//     it("Retains original props.", (done) => {
//       const Foo = (props) => {
//         expect(props).toEqual({
//           pw: 'hunter2',
//           secret: 42,
//           id: '42',
//           name: 'dog'
//         })
//         done()
//         return null
//       }
//       render(
//         <Router path="user/42/dog">
//           <Route route="user/:id/:name">
//             <Foo pw="hunter2" secret={42} />
//           </Route>
//         </Router>,
//         node
//       )
//     })
//     it("Param values shadow passed-in props.", (done) => {
//       const Foo = ({name}) => {
//         expect(name).toEqual('bar')
//         done()
//         return null
//       }
//       render(
//         <Router path="user/bar">
//           <Route route="user/:name">
//             <Foo name="foo" />
//           </Route>
//         </Router>,
//         node
//       )
//     })
//   })

//   describe("Rendering multiple children.", () => {
//     it("Renders multiple children.", (done) => {
//       const Foo = (props) => {
//         return <div>{props.foo}</div>
//       }
//       const App = (props) => (
//         <Route route="/">
//           {props.isTrue && <Foo foo="foo"/>}
//         </Route>
//       )
//       render(
//         <Router path="/">
//           <div />
//           <App isTrue={true} />
//         </Router>,
//         node,
//         () => {
//           says('foo')
//           done()
//         }
//       )
//     })
//   })

//   describe("Edge cases", () => {

//     it("Renders correctly when a parent component has declared context.", (done) => {

//       const ContextComponent = React.createClass({
//         contextTypes: {
//           foo: React.PropTypes.string
//         },
//         getChildContext() {
//           foo: 'foo'
//         },
//         render() {
//           return <div>context</div>
//         }
//       })

//       render (
//         <Router path="users">
//           <ContextComponent />
//           <Route route="users">users</Route>
//         </Router>,
//         node,
//         () => {
//           says('contextusers')
//           done()
//         }
//       )

//     })

//     it("Works correctly with react-redux connect() implementing shouldComponentUpdate shallow comparison.", (done) => {

//       const url = (state='', action) => {
//         if (action.type === 'SET_URL')
//           return action.payload
//         return state
//       }

//       const store = createStore(combineReducers({url}))

//       let App = () => (
//         <div>
//           <Route route="users">users</Route>
//         </div>
//       )

//       const mapStateToProps = (state) => ({})

//       App = connect(mapStateToProps)(App)

//       store.subscribe(() => {
//         const state = store.getState()
//         render(
//           <Provider store={store}>
//             <Router path={state.url}>
//               <App />
//             </Router>
//           </Provider>,
//           node
//         )
//       })

//       store.dispatch({
//         type: 'SET_URL',
//         payload: 'foo'
//       })

//       store.dispatch({
//         type: 'SET_URL',
//         payload: 'users'
//       })

//       let id
//       id = setInterval(() => {
//         if (node.textContent === 'users') {
//           clearInterval(id)
//           done()
//         }
//       }, 10)

//       setTimeout(() => {
//         clearInterval(id)
//       }, 500)

//     })

//     it("Gives a React PropType warning even when a route's children are not rendered.", () => {
//       const consoleError = console.error
//       console.error = (error) => {throw new Error(error)}
//       const Foo = () => <div>foo</div>
//       Foo.propTypes = {id: React.PropTypes.string.isRequired}
//       expect(() => {
//         render(
//           <Router path="/test">
//             <Route route="test">
//               <Route route=":id">
//                 <Foo />
//               </Route>
//             </Route>
//           </Router>,
//           node
//         )
//       }).toThrow()
//       isEmpty()
//       console.error = consoleError
//     })

//   })

// })
