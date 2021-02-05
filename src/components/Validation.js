import * as Yup from 'yup'

const Validation = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Please enter a longer name!')
    .max(50, 'Please enter a shorter name!')
    .required('Your Name is Required!'),
  email: Yup.string()
    .email('Please enter a valid email!')
    .required('Your email is required!'),
  message: Yup.string().required('Please submit a short message'),
})

export default Validation
