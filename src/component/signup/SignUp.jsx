import { useState } from 'react';
import { auth, firestore } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { signUpSchema } from '../../assets/validationSchema'; // Importer Yup-skjemaet
import '../signup/signup.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    postalCode: '',
    postalPlace: '',
    city: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setError(null);
    setSuccess(null);

    // Validering med Yup
    try {
      await signUpSchema.validate(formData, { abortEarly: false });
      
      // Opprett bruker med e-post og passord i Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Lagre ekstra informasjon i Firestore
      await addDoc(collection(firestore, 'users'), {
        uid: user.uid,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        postalCode: formData.postalCode,
        postalPlace: formData.postalPlace,
        city: formData.city,
      });

      setSuccess('User registered successfully!');
      setFormData({
        name: '',
        phone: '',
        address: '',
        postalCode: '',
        postalPlace: '',
        city: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
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
            <input
              type="text"
              placeholder="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
            {errors.city && <div className="input-error">{errors.city}</div>}
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


