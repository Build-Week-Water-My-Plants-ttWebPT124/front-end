

const Login = (props)=>{

    return (
        <div>
            <form className='form container' onSubmit={''}>
                <h2>Login</h2>
                <label className='text-field'>Username
                <input  
                    name='username' 
                    type='text' />
                </label>

                <label className='text-field'>Password
                <input  
                    name='password' 
                    type='text' />
                </label>

                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default Login;