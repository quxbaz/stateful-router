import expect from 'expect'
import {render} from 'react-dom'

const nodeTextIs = (component, text) => {
  const div = document.createElement('div')
  render(component, div)
  expect(div.textContent).toBe(text)
}

const nodeIsEmpty = (component) => {
  const div = document.createElement('div')
  render(component, div)
  expect(div.textContent).toNotExist()
}

export {
  nodeTextIs,
  nodeIsEmpty,
}
