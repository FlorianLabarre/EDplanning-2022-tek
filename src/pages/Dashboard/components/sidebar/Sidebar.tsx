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
          <h3 className="sidebarTitle">Quick menu</h3>
          <ul className='sideBarList'>
            <li className="sidebarListItem active">
              <LineStyle className='sidebarIcon' />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className='sidebarIcon' />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className='sidebarIcon' />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Statistic</h3>
          <ul className='sideBarList'>
            <li className="sidebarListItem active">
              <LineStyle className='sidebarIcon' />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className='sidebarIcon' />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className='sidebarIcon' />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
