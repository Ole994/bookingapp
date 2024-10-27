// src/component/signup/SignUp.jsx
import { useState } from 'react';
import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useFormik } from 'formik';
import { signUpSchema } from '../../assets/validationSchema';

const SignUp = () => {
  const [success, setSuccess] = useState(null); // Ny state for suksessmelding
  const [error, setError] = useState(null);     // Ny state for feilmelding

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signUpSchema, // Bruker Yup-validering
    onSubmit: async (values) => {
      setError(null); // Tilbakestiller error ved hver innsending
      setSuccess(null); // Tilbakestiller suksessmelding ved hver innsending

      try {
        await createUserWithEmailAndPassword(auth, values.email, values.password);
        setSuccess('User registered successfully!'); // Setter suksessmeldingen
        console.log('User registered successfully');
      } catch (error) {
        console.error('Error signing up:', error.message);
        setError(error.message); // Setter feilmeldingen
      }
    },
  });

  return (
    <div>
      <h2>Sign Up</h2>
      
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Viser feilmeldingen */}
      {success && <p style={{ color: 'green' }}>{success}</p>} {/* Viser suksessmeldingen */}

      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            required
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            required
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: 'red' }}>{formik.errors.password}</div>
          ) : null}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
