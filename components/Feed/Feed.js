// Feed.js
import React, { useState } from 'react';
import AudioPlayer from 'react-audio-player';
import './Feed.css'; // Import your CSS file for styling
import{Avatar, colors} from "@mui/material";
const Feed = () => {
  const [currentSong, setCurrentSong] = useState(null);

  const songs = [
    {
      title: 'Neeyum Nanum',
      artist: 'Anirudh Ravichander',
      albumImage:
        'https://e1.pxfuel.com/desktop-wallpaper/78/341/desktop-wallpaper-love-lessons-learnt-naanum-rowdy-dhaan-becoming-bala-naanum-rowdy-dhaan.jpg',
      audioUrl: 'https://pagallworld.co.in/wp-content/uploads/2023/08/Neeyum-Naanum-Sernthu.mp3', // Replace with your actual audio URL
      artistPhoto:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Anirudh_Ravinchander_Twitter.jpg/330px-Anirudh_Ravinchander_Twitter.jpg',
    },
    {
      title: 'Vachindamma',
      artist: 'Sid Sriram',
      albumImage:
        'https://2.bp.blogspot.com/-3JhT3asu1JE/W34gojk0apI/AAAAAAAAQqU/kT_W8qPGkywesXOCVMd-CJQQ06faDIBEwCLcBGAs/w1200-h630-p-k-no-nu/Geetha-Govindam-5-days-Worldwide-Collections.jpg',
      audioUrl: 'https://pagallworld.co.in/wp-content/uploads/2023/12/Vachindamma-Vachindamma.mp3', // Replace with your actual audio URL
      artistPhoto:
        'https://www.sakshi.com/sites/default/files/styles/rich_cards/public/article_images/2022/05/19/Sid-Sriram.jpg?itok=1dN4_EhU'
    },
  
    {
      title: 'Mahiye Jinna Sohna',
      artist: 'Darshan Raval',
      albumImage:
        'https://st1.latestly.com/wp-content/uploads/2023/06/1-8-8.jpg',
      audioUrl: 'https://pagalworld.com.pe/files/download/id/66952', // Replace with your actual audio URL
      artistPhoto:
        'https://i.pinimg.com/236x/29/8c/bf/298cbf9d4995b8a864700121bb55cca0.jpg',  
  },
  {
    title: 'Heeriye',
    artist: 'Arijit Singh',
    albumImage:
      'https://images.herzindagi.info/image/2023/Jul/heeriye1.jpg',
    audioUrl: 'https://paglasongs.com/files/download/id/14824', // Replace with your actual audio URL
    artistPhoto:
      'https://i.pinimg.com/originals/cc/23/b2/cc23b24496664f876a8f0ccfa8d06163.jpg',  
},
{
  title: 'Aradhya',
  artist: 'Sid Sriram',
  albumImage:
    'https://static.tnn.in/thumb/msid-103620821,thumbsize-33598,width-1280,height-720,resizemode-75/103620821.jpg',
  audioUrl: 'https://pagalworld.cool/files/download/id/1243', // Replace with your actual audio URL
  artistPhoto:
    'https://www.sakshi.com/sites/default/files/styles/rich_cards/public/article_images/2022/05/19/Sid-Sriram.jpg?itok=1dN4_EhU',  
},
{
  title: 'Mehabooba',
  artist: 'Ananya Bhat',
  albumImage:
    'https://www.koimoi.com/wp-content/new-galleries/2022/06/kgf-chapter-3-after-srinidhi-shettys-exit-from-the-franchise-an-a-listed-bollywood-actress-to-romance-rocky-bhai-yash-in-next-001.jpg',
  audioUrl: 'https://www.pagalworldl.com/files/download/id/7743', // Replace with your actual audio URL
  artistPhoto:
    'https://lastfm.freetls.fastly.net/i/u/ar0/98fee9602c20f3201c14b0c972063cdc.jpg',  
}
    // Add more songs as needed
  ];

  const playSong = (song) => {
    setCurrentSong(song);
  };

  return (
<div className="feed">
      <div className="songs">
        {songs.map((song, index) => (
          <div key={index} className="feed-item">
            <img
              className="feed-item__image"
              src={song.albumImage}
              alt={`${song.title} Album Cover`}
              onClick={() => playSong(song)} // Added onClick event on the album image
            />
            <div className="feed-item__info">
              <h3>{song.title}</h3>
              <p style={{ color: 'white' }}>{song.artist}</p>
              <Avatar
                className="feed-artist__image"
                src={song.artistPhoto}
                alt={`${song.title} artist`}
                style={{ width: '100px', height: '100px' }}
              />
              <br></br>
              {/* Remove the "Play" button */}
            </div>
          </div>
        ))}
      </div>
      {currentSong && (
        <div className="current-song">
          <p>Now Playing: {`${currentSong.title} - ${currentSong.artist}`}</p>
          <AudioPlayer src={currentSong.audioUrl} autoPlay controls/>
        </div>
      )}
    </div>
    
  );
};

export default Feed;
