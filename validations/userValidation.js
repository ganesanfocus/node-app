// validations/userValidation.js
const yup = require('yup');

// Define the validation schema for user registration
const userValidationSchema = yup.object({
  username: yup.string().required('Username is required').min(3, 'Username must be at least 3 characters'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
  age: yup.number().required('Age is required').min(18, 'Must be 18 or older'),
});

module.exports = userValidationSchema;