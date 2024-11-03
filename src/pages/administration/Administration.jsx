import { useEffect, useState } from 'react';
import { firestore } from '../../utils/firebaseConfig';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import './Administration.css';

const Administration = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'users'));
        const userList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(userList);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await deleteDoc(doc(firestore, 'users', userId));
      setUsers(users.filter((user) => user.id !== userId));
      alert("Bruker slettet med suksess.");
    } catch (error) {
      console.error('Error deleting user:', error);
      alert("Kunne ikke slette bruker.");
    }
  };

  if (loading) {
    return <div className="loading">Laster...</div>;
  }

  return (
    <div className="admin-container">
      <h1 className="admin-title">Brukeradministrasjon</h1>
      {users.length > 0 ? (
        <div className="user-card-container">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <div className="user-info">
                <img
                  src={user.profileImage || 'default-avatar.png'}
                  alt="Profile"
                  className="user-image"
                />
                <div className="user-details">
                  <h2>{user.name}</h2>
                  <p>Email: {user.email}</p>
                  <p>Telefon: {user.phone}</p>
                  <p>Adresse: {user.address}</p>
                  <p>Postnummer: {user.postalCode}</p>
                  <p>By: {user.city}</p>
                  <p>Land: {user.country}</p>
                  <p>Fødselsdato: {user.birthDate || 'Ingen fødselsdato'}</p>
                  <p>Kjønn: {user.gender || 'Ingen kjønn'}</p>
                  <textarea 
                    className="description-box" 
                    value={user.description || 'Ingen beskrivelse'} 
                    readOnly 
                  />
                </div>
              </div>
              <button
                onClick={() => handleDelete(user.id)}
                className="delete-button"
              >
                Slett
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-users">Ingen brukere funnet.</p>
      )}
    </div>
  );
};

export default Administration;







