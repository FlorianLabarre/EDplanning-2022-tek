import React from 'react'
import "./sidebar.css"
import {
  LineStyle,
  Timeline,
  Contacts,
  LocationSearching
} from '@mui/icons-material';

interface SidebarProps {
  setOnMap?: any,
  setOnHome?: any,
  setOnAnalytics?: any
}

const Sidebar = ({ setOnMap, setOnHome, setOnAnalytics }: SidebarProps): JSX.Element => {
  const reset = () => {
    setOnMap(false);
    setOnHome(false);
    setOnAnalytics(false);
  };

  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick menu</h3>
          <ul className='sideBarList'>
            <li className="sidebarListItem active" onClick={() => {reset(); setOnHome(true)}}>
              <LineStyle className='sidebarIcon' />
              Home
            </li>
            <li className="sidebarListItem" onClick={() => {reset(); setOnAnalytics(true)}}>
              <Timeline className='sidebarIcon' />
              Analytics
            </li>
            <li className="sidebarListItem" onClick={() => {reset(); setOnMap(true)}}>
              <LocationSearching className='sidebarIcon' />
              Search
            </li>
            <li className="sidebarListItem" onClick={() => {reset(); setOnHome(true)}}>
              <Contacts className='sidebarIcon' />
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;