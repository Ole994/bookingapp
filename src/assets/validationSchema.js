import * as Yup from 'yup';

export const signUpSchema = Yup.object({
  name: Yup.string()
    .required('Name is required'),

  phone: Yup.string()
    .matches(/^[0-9]{8,15}$/, 'Phone number must be between 8 and 15 digits')
    .required('Phone number is required'),

  address: Yup.string()
    .required('Address is required'),

  postalCode: Yup.string()
    .matches(/^[0-9]{4}$/, 'Postal code must be exactly 4 digits')
    .required('Postal code is required'),

  postalPlace: Yup.string()
    .required('Postal place is required'),

  city: Yup.string()
    .required('City is required'),

  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),

  password: Yup.string()
    .min(12, 'Password must be at least 12 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
    .required('Password is required'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});
