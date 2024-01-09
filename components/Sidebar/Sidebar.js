import React from 'react'
import SidebarRow from '../SidebarRow/SidebarRow'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { Avatar } from '@mui/material';


const Sidebar = ({user}) => {
  return (
    <div className="sidebar">
        

      {/* Sidebar rows */}
      <SidebarRow title="Home" Icon={HomeIcon} />
      <SidebarRow title="Search" Icon={SearchIcon} />
      <SidebarRow title="Your Library" Icon={LibraryMusicIcon} />

      {/* User info */}
      <br />
      <strong className="sidebar__title" style={{ color: 'white' }}>PLAYLISTS</strong>
      

      {/* Example playlist */}
      <SidebarRow
        title="Your Playlist"
        src={<Avatar src="your_avatar_url.jpg" />}
      />
    </div>
  )
}

export default Sidebar