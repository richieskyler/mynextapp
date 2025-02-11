// SingleUser.js
import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from '@/Components/Navbar';
import { useRouter } from 'next/router';
import Image from 'next/image';


const SingleUser = () => {
    const [user, setUser] = useState(null);
    const router = useRouter()
    const {username, imgUrl} = router.query;
    const GITHUBTOKEN = process.env.NEXT_REACT_APP_GITHUB_TOKEN

    

  const getUser = async () => {

    

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`, 
        {
          headers: {
            Authorization: ` ${GITHUBTOKEN}`
          }
        }
      );
      
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (username) {
      getUser();
    }
  }, [username]);

  if (!user) return <div>Loading...</div>

  return (
    <div className="flex flex-col items-center w-full">
      <Navbar/>
      <div>
      <Image  src={imgUrl} alt='img' width={500} height={500}/>
      </div>
      <div className="p-4">
        <img
          src={user.avatar_url}
          className="w-[200px] rounded-full mb-4"
          alt={user.login}
        />
        <p><b>Username:</b> {user.login}</p>
        <p><b>Name:</b> {user.name}</p>
        <p><b>Followers:</b> {user.followers}</p>
        <p><b>Following:</b> {user.following}</p>
        <p><b>Public Repos:</b> {user.public_repos}</p>
        <p><b>Company:</b> {user.company}</p>
        <p><b>Location:</b> {user.location}</p>
        
      </div>
    </div>
  );
}

export default SingleUser