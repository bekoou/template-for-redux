import React from 'react'
import { Provider } from 'react-redux'
import Users from './users'
import store from './redux'
import Example from './example'

const Root = () => {
  return (
    <div>
      <Provider store={store}>
        <Users />
        <Example />
      </Provider>
    </div>
  )
}

export default Root
