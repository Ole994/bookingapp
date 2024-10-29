// src/component/signup/SignUp.jsx
import { useState } from 'react';
import { auth, firestore } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { signUpSchema } from '../../assets/validationSchema';
import CityAutocomplete from './CityAutoComplete';
import CountryAutocomplete from './CountryAutoComplete';
import '../signup/signup.css';

const SignUp = () => {
  const navigate = useNavigate();  // Initialize useNavigate for redirection
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

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle city selection
  const handleCitySelect = (selectedCity) => {
    setFormData((prevData) => ({
      ...prevData,
      city: selectedCity,
    }));
  };

  // Handle country selection
  const handleCountrySelect = (selectedCountry) => {
    setFormData((prevData) => ({
      ...prevData,
      country: selectedCountry,
    }));
  };

  // Function for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setError(null);
    setSuccess(null);

    try {
      // Validate with Yup
      await signUpSchema.validate(formData, { abortEarly: false });
      
      // Register user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Save user data in Firestore
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

  return (
    <div className="signup-page">
      <div className="signup-box">
        <h2>Create Account</h2>

        {error && <p className="message error">{error}</p>}
        {success && <p className="message success">{success}</p>}

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <div className="input-error">{errors.name}</div>}
          </div>

          <div className="input-group">
            <input
              type="tel"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <div className="input-error">{errors.phone}</div>}
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            {errors.address && <div className="input-error">{errors.address}</div>}
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder="Postal Code"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
            {errors.postalCode && <div className="input-error">{errors.postalCode}</div>}
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder="Postal Place"
              name="postalPlace"
              value={formData.postalPlace}
              onChange={handleChange}
              required
            />
            {errors.postalPlace && <div className="input-error">{errors.postalPlace}</div>}
          </div>

          <div className="input-group">
            <CityAutocomplete onCitySelect={handleCitySelect} />
            {errors.city && <div className="input-error">{errors.city}</div>}
          </div>

          <div className="input-group">
            <CountryAutocomplete onCountrySelect={handleCountrySelect} />
            {errors.country && <div className="input-error">{errors.country}</div>}
          </div>

          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <div className="input-error">{errors.email}</div>}
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <div className="input-error">{errors.password}</div>}
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && <div className="input-error">{errors.confirmPassword}</div>}
          </div>

          <button type="submit" className="submit-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;






