
const Signup = (props)=>{

    const {
        values,
        submit,
        change,
        errors,
      } = props

    const onChange = evt => {
    
        const { name, value, type } = evt.target
  
        change(name)
     }

    return (
        <div className='form'>
            <form className='form container' onSubmit={''}>
                <h2>Sign Up!</h2>
                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.phonenumber}</div>
                    <div>{errors.password}</div>
                </div>

                <label className='text-field'>Username
                    <input  
                        value={values.username}
                        onChange={onChange} 
                        name='username' 
                        type='text' />
                </label>

                <label className='text-field'>Phone Number
                    <input  
                        value={values.phonenumber}
                        onChange={onChange} 
                        name='phonenumber' 
                        type='text' />  
                </label>
                <label className='text-field'>Password
                    <input  
                        value={values.password}
                        onChange={onChange} 
                        name='password' 
                        type='text' />
                </label>

                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;