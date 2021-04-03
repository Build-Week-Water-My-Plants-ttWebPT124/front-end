import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/logo.png';

const Nav = (props) => {

    return(
        <NavBar className='navbar'>

            {/* This part is giving me trouble getting the h1 to line up in the center with alignItems */}
            <div style={{display: 'flex', flexDirection: 'columns'}}>
                <Link to='/' style={{width: '50px'}}><img className='logo' style={{height: '100%', width: 'auto'}} src={logo} alt='logo'/></Link>
                <h1 style={{margin: 0}}>Water My Plants</h1>
            </div>
            
            <div className='link-container' style={{display: 'flex', alignItems:'center'}}>
                <Link to='/'><Navbutton>Home</Navbutton></Link>
                <Link to='/user'><Navbutton>Account</Navbutton></Link>
                <Link to='/plantlist'><Navbutton>My Plants</Navbutton></Link>
                <Link to='/login'><Navbutton>Login</Navbutton></Link>
                <Link to='/signup'><Navbutton>Signup</Navbutton></Link>
                    
            </div>
            
        </NavBar>
    )
}


const NavBar = styled.div`
height: 50px;
padding: 10px;
background: darkgreen;
display: flex;
align-itmes: center;
justify-content: space-between;
`

const Navbutton = styled.button`
border: 1px solid black;
background-color: green;
button-radius: 4px;
margin: 2px;
`

export default Nav;