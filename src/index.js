import Router from './Router'
import Route from './Route'

console.log('stateful-router/index.js')
window.addEventListener('keydown', (event) => {
  if (event.key === 'a')
    throw 'stateful-router ERROR'
})

export {
  Router,
  Route,
}
