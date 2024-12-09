import React from 'react'
import {Header, Recipes, Footer, Login} from './components'
import Register from './components/Register/Register'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter> 
          <Routes>
            <Route path="/" element ={
              <> 
                <Header/> 
                <Recipes/>
                <Footer/> 
              </>}/>
            <Route path='/login' element ={
              <>
                <Login/>
              </>
            }/>
            <Route path='/register' element ={
              <>
                <Register/>
              </>
            }/>
          </Routes>
          
      </BrowserRouter>
       
    </>
  ) 
}

export default App