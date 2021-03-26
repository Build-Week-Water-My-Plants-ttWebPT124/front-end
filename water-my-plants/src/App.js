import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import * as yup from 'yup'
import formSchema from './validation/formSchema'
import logo from './assets/logo.png'

import Homepage from './components/Homepage';
import Login from './components/Login'
import Signup from './components/Signup'
import Nav from './components/Nav'




const initialFormValues = {
  
  username: '',

  phonenumber: '',

  password: '',

}


const initialFormErrors = {
  username: '',

  phonenumber: '',

  password: '',

}




function App() {


  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch(err => {
        setFormErrors({...formErrors, [name]: err.errors[0]})
      })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }


  return (
    <div className="App">


      <Nav />
      <div className='Site_Container' style={{backgroundColor: 'darkgreen', 
                                              width: '100%', 
                                              display:'flex',
                                              justifyContent: 'space-around'}}>
        <Route exact path='/'>
          <Homepage />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/signup'>
          <Signup values={formValues} change={inputChange} errors={formErrors} />
        </Route>

      </div>

    <footer className='footer'></footer>
  </div>
  );
}

export default App;
