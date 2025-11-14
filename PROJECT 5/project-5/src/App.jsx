import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Store/Store'
import Crud from './Component/Crud'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Crud/>
      </Provider>
    </div>
  )
}
