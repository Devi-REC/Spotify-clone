// Home.js

import React from 'react';
import Header from '../Header/head';
import Sidebar from '../Sidebar/Sidebar';
import Feed from '../Feed/Feed';
import "./Home.css";
const Home = ({user,setUser}) => {
  const songs = [
    {
      title: 'Song 1',
      artist: 'Artist 1',
      albumImage: 'url_to_image_1',
    },
    {
      title: 'Song 2',
      artist: 'Artist 2',
      albumImage: 'url_to_image_2',
    },
    // Add more songs as needed
  ];
  return (
    <div>  
     <Header user={user} setUser={setUser}/>
     <div className="app_body">
      <Sidebar user={user}/>
     
     <Feed songs={songs} />

     </div>
    </div>
  );
};

export default Home;
