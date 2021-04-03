import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom'
import * as yup from 'yup'
import formSchema from './validation/formSchema'
import userFormSchema from './validation/userFormSchema'
import plantFormSchema from './validation/plantFormSchema'
import axios from 'axios'
import logo from './assets/logo.png';

import Homepage from './components/Homepage';
import Login from './components/Login'
import Signup from './components/Signup'
import Nav from './components/Nav'
import PlantsList from './components/PlantsList'
import PlantDetails from './components/PlantDetails'
import UserDetails from './components/UserDetails'


// Plant DashBoard
  const plantList = [{nickname:'testplant', species:'test species', h2oFrequency: 'Calculating...', image:logo}]
  const initialPlantValues = {
    id:'',
    nickname: '',
    species : '',
    h2oFrequency: 'Calculating...',
    image: logo,
  }

  const initialPlantErrors = {
    nickname: '',
  
    species: '',
  
  }


// End of Plant DashBoard

// Signup Form
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
// End of Signup Form


function App() {

  let history = useHistory()

  //Plant DashBoard 
  const [plant, setPlant] = useState(plantList)

  const [plantForms, setPlantForms] = useState(initialPlantValues)
  const [plantErrors, setPlantErrors] = useState(initialPlantErrors)
  const [disabled, setDisabled] = useState(initialDisabled) 

  plant.forEach((item, i) => {
    item.id = i + 1;
  })


  const deletePlant = (currentID) =>{
    setPlant(plant.filter((i) =>{return i.id !== currentID}))
  }

  const updatePlantForm = (inputName, inputValue) => {
    setPlantForms({...plantForms, [inputName]: inputValue})
    yup.reach(plantFormSchema, inputName)
    .validate(inputValue)
    .then(() => {
      setPlantErrors({...plantErrors, [inputName]: ''})
    })
    .catch(err => {
      setPlantErrors({...plantErrors, [inputName]: err.errors[0]})
    })
      setPlantErrors({...plantErrors, [inputName]: inputValue})
  }

  const submitPlant = () => {
    const newPlant = {
      nickname: plantForms.nickname.trim(),
      species: plantForms.species.trim(),
      h2oFrequency: initialPlantValues.h2oFrequency,
      image: initialPlantValues.image
    }

    setPlant([...plant, newPlant])
    setPlantForms(initialPlantValues)
  }

 const plantEdit = (currentID) =>{
   var data = [...plant];
   var index = data.findIndex(obj => obj.id === currentID);
   data[index].nickname = plantForms.nickname.trim();
   data[index].species = plantForms.species.trim();

   setPlant( data )
   setPlantForms(initialPlantValues)
 }


useEffect(() => {
  plantFormSchema.isValid(plantForms)
  .then(valid => setDisabled(!valid))
}, [plantForms])

  useEffect(()=>{
    console.log(plant)
  },[plant])

  //End of Plant Dash Board

  // Signup Form
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  

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
  // End of Signup Form

    //User Account
    const test = {

      username: 'TestUser101',
  
      phonenumber: '1234567890',
  
      password: 'password',
  
    }

    const [testuser, setTestUser] =useState(test)
  
    const editUser = () =>{
        const newUser = {
          username: testuser.username,
  
          phonenumber: formValues.phonenumber.trim(),
    
          password: formValues.password.trim(),
        }
        setTestUser(newUser)
    }
    
    useEffect(() => {
      userFormSchema.isValid(formValues)
      .then(valid => setDisabled(!valid))
    }, [formValues])
  
    //End of User Account

  useEffect(()=>{
    console.log(users)
  },[users])


  return (
    <div className="App">


      <Nav />
      <div className='Site_Container' style={{backgroundColor: '',
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

        <Route path='/user'>
          <UserDetails 
            user ={testuser} 
            values={formValues}
            change={inputChange} 
            errors={formErrors}
            submit={editUser}
            disabled={disabled}

          />
        </Route>

        <Route path='/plantlist'>
          <PlantsList 
            plantsList={plant}
            plantValues={plantForms} 
            plantUpdate={updatePlantForm}
            plantSubmit={submitPlant}
            removePlant={deletePlant}
            plantErrors={plantErrors}
            disabled={disabled}
          />
        </Route>

        <Route path='/plant/:plantID'>
          <PlantDetails 
            plants={plant} 
            editValues={plantForms} 
            editUpdate={updatePlantForm} 
            editSubmit={plantEdit} 
            disabled={disabled}
            />
        </Route>

      </div>

    <footer className='footer'></footer>
  </div>
  );
}

export default App;
