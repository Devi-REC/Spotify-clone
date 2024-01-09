import React from 'react';
import "./head.css";
import { Search, LibraryMusic, Home, AddBox, Favorite,ExitToApp} from "@mui/icons-material";
import { Avatar, IconButton } from '@mui/material';
import { auth} from '../../firebase';

const Header = ({user}) => {
  const handleLogout = () => {
    auth.signOut(); // Sign out the user
  };

  return (
    <div className="spotify-header">
    <div className="spotify-header__left">
      <img
        className="spotify-header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png"
        alt="Spotify Logo"
      />
      <div className="spotify-header__search">
        <Search />
        <input placeholder='Search' type="text" />
      </div>
    </div>

    <div className="spotify-header__center">
      <div className="spotify-header__option spotify-header__option--active">
        <Home fontSize="large" />
      </div>
      <div className="spotify-header__option">
        <LibraryMusic fontSize="large" />
      </div>
      <div className="spotify-header__option">
        <AddBox fontSize="large" />
      </div>
      <div className="spotify-header__option">
        <Favorite fontSize="large" />
      </div>
    </div>

    <div className="spotify-header__right">
      <div className="spotify-header__user-info">
        <Avatar src={user.photoURL} alt={user.displayName} />
        <h4>{user.displayName}</h4>
      </div>
      <IconButton onClick={handleLogout}>
        <ExitToApp style={{ color: '#ffffff' }}/>
      </IconButton>
    </div>
  </div>
  )
}

export default Header