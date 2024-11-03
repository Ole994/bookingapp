import { useState } from 'react';
import { auth, firestore, storage } from '../../utils/firebaseConfig'; // Importer nødvendige moduler
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'; // Importer setDoc for å oppdatere dokumenter
import { useNavigate } from 'react-router-dom';
import { signUpSchema } from '../../assets/validationSchema';
import CityAutocomplete from '../../component/AutoComplete/CityAutoComplete';
import CountryAutocomplete from '../../component/AutoComplete/CountryAutoComplete';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Importer for opplasting av bilder
import './signup.css';

const SignUp = () => {
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
    birthDate: '', // Nytt felt for fødselsdato
    gender: '', // Nytt felt for kjønn
  });
  const [profileImage, setProfileImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleCitySelect = (selectedCity) => {
    setFormData((prevData) => ({
      ...prevData,
      city: selectedCity,
    }));
  };

  const handleCountrySelect = (selectedCountry) => {
    setFormData((prevData) => ({
      ...prevData,
      country: selectedCountry,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setError(null);
    setSuccess(null);

    try {
      await signUpSchema.validate(formData, { abortEarly: false });

      // Opprett bruker med Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      let profileImageUrl = '';
      // Last opp profilbilde hvis det er valgt
      if (profileImage) {
        const imageRef = ref(storage, `profileImages/${user.uid}`);
        await uploadBytes(imageRef, profileImage);
        profileImageUrl = await getDownloadURL(imageRef); // Hent URL for det opplastede bildet
      }

      // Opprett eller oppdater dokumentet for brukeren i Firestore
      await setDoc(doc(firestore, 'users', user.uid), {
        uid: user.uid,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        postalCode: formData.postalCode,
        postalPlace: formData.postalPlace,
        city: formData.city,
        country: formData.country,
        profileImage: profileImageUrl, // Lagre URL for profilbilde
        birthDate: formData.birthDate, // Legger til fødselsdato
        gender: formData.gender, // Legger til kjønn
      });

      setSuccess('User registered successfully!');

      // Naviger til profilen etter registrering
      navigate('/profile');
      
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
        <h2>Opprett bruker</h2>

        {error && <p className="message error">{error}</p>}
        {success && <p className="message success">{success}</p>}

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Navn"
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
              placeholder="Telefon nummer"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <div className="input-error">{errors.phone}</div>}
          </div>

          <div className="input-group">
            <input
              type="date"
              placeholder="Fødselsdato"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
            />
            {errors.birthDate && <div className="input-error">{errors.birthDate}</div>}
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder="Adresse"
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
              placeholder="Postnummer"
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
              placeholder="Postadresse"
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
              placeholder="E-mail"
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
              placeholder="Passord"
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
              placeholder="Bekreft passord"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && <div className="input-error">{errors.confirmPassword}</div>}
          </div>

          <div className="input-group">
            <label htmlFor="gender">Kjønn:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Velg Kjønn</option>
              <option value="Male">Mann</option>
              <option value="Female">Kvinne</option>
              <option value="Other">Annet</option>
            </select>
            {errors.gender && <div className="input-error">{errors.gender}</div>}
          </div>

          <div className="input-group">
            <label htmlFor="profileImage" className="file-label">
              Profile Image (optional):
            </label>
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <button type="submit" className="submit-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;










