import React, {Fragment, useState} from "react"
import ReactDOM from "react-dom"
import Navbar from "./Navbar"
import Home from "./components/Home"
import Overview from "./components/Overview"
import Login from "./components/Login"
import Contact from "./components/Contact"

function App(){
  let pages
  switch (window.location.pathname) {
    case "/":
      pages = <Home />
      break
    case "/login":
      pages = <Login />
      break
    case "/overview":
      pages = <Overview />
      break
    case "/contact":
      pages = <Contact />
      break  
  }
  return (
    <>
      <Navbar />
      {pages }
    </>
  )
}

/*function App(){
  return (
      <Navbar />
  )
}*/

export default App