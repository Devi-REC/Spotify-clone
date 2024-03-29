import React from 'react'
import { Avatar } from '@mui/material'
import "./SidebarRow.css";
const SidebarRow = ({title,Icon,src}) => {
  return (
    <div className="sidebarRow">
        {src && <Avatar src={src}/>}
        {Icon &&<Icon/>}
        <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow