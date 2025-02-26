// controllers/userController.js
const User = require('../models/userModel');
const userValidationSchema = require('../validations/userValidation');

// Controller function for registering a user
const registerUser = async (req, res) => {
  try {
    // Validate the request body using Yup
    await userValidationSchema.validate(req.body, { abortEarly: false });

    // If validation passes, create a new user instance
    const { username, email, password, age } = req.body;
    const newUser = new User(username, email, password, age);

    // Simulate saving the user (for now, just return the user object)
    return res.status(201).json({
      message: 'User registered successfully',
      user: newUser,
    });
  } catch (error) {
    // Handle validation errors and return them separately for each key
    if (error.inner) {
      const errorMessages = error.inner.reduce((acc, currError) => {
        acc[currError.path] = currError.message; // Separate error for each key
        return acc;
      }, {});

      return res.status(400).json({
        message: 'Validation failed',
        errors: errorMessages, // Return separate errors for each key
      });
    }

    // Handle any unexpected errors
    return res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  }
};

module.exports = { registerUser };