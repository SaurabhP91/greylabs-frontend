import React from 'react'
import './topbar.css'

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
export default function Topbar() {
  return (
    <div id='dashboardheader'>
        <span id='leftheader'>
        <HomeIcon id='headericon'/>
        <span id='leftheadertitle'> / Dashboard</span>
        <br/>
        <span id='leftheadersubtitle'>Dashboard</span>
        </span>
       

        <span id="searchbar" >
            <SearchIcon className="searchicon"/>
            <input placeholder="Type here..." 
            className="searchinput"/>
        </span>

        <span id='rightheader'>
            <AccountCircleIcon id='signinicon'/>
            Sign in
            
            <SettingsIcon className='sideheadericon'/>
            <NotificationsIcon className='sideheadericon'/>

        </span>
      </div>
  )
}
