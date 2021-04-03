import React from 'react'

const Signup = (props)=>{

    const {
        values,
        submit,
        change,
        errors,
        disabled,
      } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

    const onChange = evt => {
    
        const { name, value, checked, type  } = evt.target

        const val = type ==='checkbox' ? checked : value
  
        change(name, val)
     }

    return (
        <div className='form'>
            <form className='form container' onSubmit={onSubmit}>
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
                        type='password' />
                </label>

                <button disabled={disabled}>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;