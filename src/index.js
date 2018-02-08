import React from 'react'
import ReactDOM from 'react-dom'
import OperatorLayout from './operator'

ReactDOM.render(<OperatorLayout />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept() // Enable hot-reloading during dev
}
