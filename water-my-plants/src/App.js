import './App.css';
import react from 'react'
import { Route, Link } from 'react-router-dom'
import Homepage from './components/Homepage';
import Login from './components/Login'
import Signup from './components/Signup'

function App() {

  return (
    <div className="App">
      <nav className='navbar'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/signup'><button>Signup</button></Link>
      </nav>

      <div className='Site_Container'>
        <Route exact path='/'>
          <Homepage />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/signup'>
          <Signup />
        </Route>

      </div>

      <footer className='footer'></footer>
    </div>
  );
}

export default App;
