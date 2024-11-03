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
      alert("User deleted successfully.");
    } catch (error) {
      console.error('Error deleting user:', error);
      alert("Failed to delete user.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="administration-page">
      <h2>User Management</h2>
      {users.length > 0 ? (
        <table className="user-table">
          <thead>
            <tr>
              <th>Profile Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Postal Code</th>
              <th>Postal Place</th>
              <th>City</th>
              <th>Country</th>
              <th>Birth Date</th> {/* Nytt felt for fødselsdato */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  {user.profileImage ? (
                    <img src={user.profileImage} alt="Profile" width="50" height="50" />
                  ) : (
                    'No Image'
                  )}
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>{user.postalCode}</td>
                <td>{user.postalPlace}</td>
                <td>{user.city}</td>
                <td>{user.country}</td>
                <td>{user.birthDate || 'No Birth Date'}</td> {/* Viser fødselsdato, hvis tilgjengelig */}
                <td>
                  <button onClick={() => handleDelete(user.id)} className="delete-button">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default Administration;

