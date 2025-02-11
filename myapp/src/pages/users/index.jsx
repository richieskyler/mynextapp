

import React, { useEffect, useState } from 'react';
import axios from "axios";
import LoadingImages from '@/Components/LoadingImages';
import UsersLists from '@/Components/UserLists';
import Navbar from '@/Components/Navbar';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState('');
  const handleChange = (e) =>{setGender(e.target.value)}
  const GITHUBTOKEN = process.env.NEXT_GITHUB_TOKEN
  
axios
  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.github.com/users`, {headers:{Authorization:` ${GITHUBTOKEN}`}});
      //https://randomuser.me/api/?results=10${gender === 'all' ? "" : `&gender=${gender}`}
      console.log(response.data)
      if (response.data.length > 0) {
        console.log(response.data)
        setUsers(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <Navbar/>
      {loading ? ( 
        <LoadingImages />
      ) : (
        
        <UsersLists users={users}/>
      )}
    </div>
  );
};

export default Users;














