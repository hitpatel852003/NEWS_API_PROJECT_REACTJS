import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { Provider } from 'react-redux'
import { store } from '../store/Store'

function Layout() {
  return (
    <div>
      <Provider store={store}>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
      </Provider>
    </div>
  )
}
export default  Layout