import {ReactElement} from 'react'
import {render} from 'react-dom'

const nodeTextIs = (component: ReactElement, text: string) => {
  const div = document.createElement('div')
  render(component, div)
  expect(div.textContent).toBe(text)
}

const nodeIsEmpty = (component: ReactElement) => {
  const div = document.createElement('div')
  render(component, div)
  expect(div.textContent).toBe('')
}

export {
  nodeTextIs,
  nodeIsEmpty,
}
