
const Signup = ()=>{

    return (
        <div className='form'>
            <form className='form container' onSubmit={''}>
                <label className='text-field'>Username
                    <input  
                        // value={values.username}
                        //onChange={''} 
                        name='username' 
                        type='text' />
                </label>

                <label className='text-field'>Phone Number
                    <input  
                        // value={values.phonenumber}
                        //onChange={''} 
                        name='phonenumber' 
                        type='text' />  
                </label>
                <label className='text-field'>Password
                    <input  
                        // value={values.password}
                        //onChange={''} 
                        name='password' 
                        type='text' />
                </label>

                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;