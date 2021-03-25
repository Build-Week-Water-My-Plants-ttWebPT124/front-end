

const Login = ()=>{

    return (
        <div>
            <form className='form container' onSubmit={''}>

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