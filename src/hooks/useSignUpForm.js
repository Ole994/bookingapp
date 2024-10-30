// src/hooks/useSignUpForm.js
import { useState } from 'react';
import { auth, firestore } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { signUpSchema } from '../validation/signUpSchema';
import { useNavigate } from 'react-router-dom';

const useSignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    postalCode: '',
    postalPlace: '',
    city: '',
    country: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCitySelect = (selectedCity) => {
    setFormData((prevData) => ({ ...prevData, city: selectedCity }));
  };

  const handleCountrySelect = (selectedCountry) => {
    setFormData((prevData) => ({ ...prevData, country: selectedCountry }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setError(null);
    setSuccess(null);

    try {
      await signUpSchema.validate(formData, { abortEarly: false });

      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      await addDoc(collection(firestore, 'users'), {
        uid: user.uid,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        postalCode: formData.postalCode,
        postalPlace: formData.postalPlace,
        city: formData.city,
        country: formData.country,
      });

      setSuccess('User registered successfully!');

      // Automatically log the user in
      await signInWithEmailAndPassword(auth, formData.email, formData.password);

      // Redirect to dashboard after successful login
      navigate('/dashboard');
      
    } catch (err) {
      if (err.name === 'ValidationError') {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      } else {
        console.error('Error signing up:', err.message);
        setError(err.message);
      }
    }
  };

  return {
    formData,
    errors,
    success,
    error,
    handleChange,
    handleCitySelect,
    handleCountrySelect,
    handleSubmit,
  };
};

export default useSignUpForm;
