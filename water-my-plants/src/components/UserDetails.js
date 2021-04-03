
const UserDetails = (props) =>{

    const { user, 
            values, 
            submit, 
            change, 
            errors, 
            disabled } = props

    return (
        <div>
            <h2>My Account </h2>
            <h4>Username: {user.username}</h4>
            <h4>Phone Number: {user.phonenumber}</h4>
            <h4>Password: {user.password}</h4>
            <UserEdit 
                values={values}
                submit={submit}
                change={change}
                errors={errors}
                disabled={disabled} 
                />
        </div>
        
    )
}

const UserEdit = (props)=>{

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
    
        const { name, value, checked, type } = evt.target

        const val = type ==='checkbox' ? checked : value
  
        change(name, val)
     }

    return (
        <div className='form'>
            <form className='form container' onSubmit={onSubmit}>
                <h2>Edit User Details</h2>
                <div className='errors'>
                    <div>{errors.phonenumber}</div>
                    <div>{errors.password}</div>
                </div> 

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

                <button disabled={disabled}>Save Changes</button>
            </form>
        </div>
    )
}



export default UserDetails;