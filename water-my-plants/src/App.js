import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Link, useHistory } from 'react-router-dom'
import * as yup from 'yup'
import formSchema from './validation/formSchema'
import logo from './assets/logo.png'
import axios from 'axios'

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

const initialUsers = []
const initialDisabled = true



function App() {

  let history = useHistory()

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled) 

  const postNewUsers = newUser => {
  
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users])
      })
      .catch(err => {
        console.log(err);
      })
      setFormValues(initialFormValues)
  }

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


  const signupSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),

      phonenumber: formValues.phonenumber.trim(),

      password: formValues.password.trim(),
    }
    postNewUsers(newUser)
    history.push('/')
  }

  useEffect(() => {
    formSchema.isValid(formValues)
    .then(valid => setDisabled(!valid))
  }, [formValues])

  useEffect(()=>{
    console.log(users)
  },[users])


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
          <Signup 
            values={formValues} 
            change={inputChange} 
            errors={formErrors} 
            submit={signupSubmit} 
            disabled={disabled}
          />
        </Route>

      </div>

    <footer className='footer'></footer>
  </div>
  );
}

export default App;
