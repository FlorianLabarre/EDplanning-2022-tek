import React from 'react'
import "./sidebar.css"
import {
  LineStyle,
  Timeline,
  TrendingUp
} from '@mui/icons-material';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu</h3>
          <ul className='sideBarList'>
            <li className="sidebarListItem">
              <LineStyle />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
