import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .min(6, 'Name must be 2 characters long')
        .required('Username is required'),

    phonenumber: yup
        .string()
        .trim()
        .required('Phone Number is required')
        .min(10, 'Please enter a valid Phone Number')
        .max(10,'Please enter a valid Phone Number'),

    password: yup
        .string()
        .trim()
        .required('Password is required')
        .min(2, 'Password must be 5 characters long'),

})

export default formSchema;