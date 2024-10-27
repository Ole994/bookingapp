// src/component/signup/SignUp.jsx
import { useState } from 'react';
import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useFormik } from 'formik';
import { signUpSchema } from '../../assets/validationSchema'; // Pass på at stien er korrekt

const SignUp = () => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '', // Legger til confirmPassword-felt for validering
    },
    validationSchema: signUpSchema, // Aktiverer Yup-validering
    onSubmit: async (values) => {
      setError(null);
      setSuccess(null);

      try {
        await createUserWithEmailAndPassword(auth, values.email, values.password);
        setSuccess('User registered successfully!');
        console.log('User registered successfully');
      } catch (error) {
        console.error('Error signing up:', error.message);
        setError(error.message);
      }
    },
  });

  return (
    <div>
      <h2>Sign Up</h2>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

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
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            required
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div style={{ color: 'red' }}>{formik.errors.confirmPassword}</div>
          ) : null}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
