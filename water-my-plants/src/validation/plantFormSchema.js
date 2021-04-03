import * as yup from 'yup'


const plantFormSchema = yup.object().shape({
    nickname: yup
        .string()
        .trim()
        .min(2, 'Name must be atleast 2 characters long')
        .required('Name is required'),

    species: yup
        .string()
        .trim()
        .required('Species is required'),

})

export default plantFormSchema;
