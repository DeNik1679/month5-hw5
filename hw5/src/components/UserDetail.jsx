import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams,useNavigate } from 'react-router-dom';
import { fetchUsers } from '../redux/reducer'; 

const UserDetail = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(fetchUsers()); 
  }, [dispatch]);

  const user = users.find((user) => user.id === parseInt(id));

  if (loading) {
    return <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }
  if(!user){
    return <p>Нет таких пользователей</p>
  }


  return (
    <div>
      <h1>{user.name}</h1>
      <p>email: {user.email}</p>
      <p>phone: {user.phone}</p>
      <p>website: {user.website}</p>
      <p>address: {user.address.street} - {user.address.city}</p>
      <button style={{cursor: 'pointer'}} onClick={() => navigate('/')}>go back</button>
    </div>
  );
};

export default UserDetail;
