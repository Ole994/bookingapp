// src/component/signup/SignUp.jsx
import { useState } from 'react';
import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useFormik } from 'formik';
import { signUpSchema } from '../../assets/validationSchema';
import '../signup/signup.css'; // Importerer den nye CSS-filen

const SignUp = () => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signUpSchema,
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
    <div className="signup-page">
      <div className="signup-box">
        <h2>Create Account</h2>

        {error && <p className="message error">{error}</p>}
        {success && <p className="message success">{success}</p>}

        <form onSubmit={formik.handleSubmit} className="signup-form">
          <div className="input-group">
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
              <div className="input-error">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="input-group">
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
              <div className="input-error">{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="input-group">
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
              <div className="input-error">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>

          <button type="submit" className="submit-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;



