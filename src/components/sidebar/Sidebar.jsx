import React from 'react'
import './sidebar.css'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import BuildIcon from '@mui/icons-material/Build';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function Sidebar() {
  return (
    <div id="sidebarcontainer">
      <div id="toplogo">
        <DensityMediumIcon id="toplogoicon"/>
        <span className='txt'>VISION UI FREE</span>
      </div>
      <div id='dashboardtile' className='tiles'>
        <span className='sidebariconcontainer'><HomeIcon id='sidebaricon'/></span>
        Dashboard
      </div>
      <div id='tablestile' className='tiles'>
      <span className='sidebariconcontainer'><BarChartIcon id='sidebaricon'/></span>
        Tables
      </div>
      <div id='billingtile' className='tiles'>
      <span className='sidebariconcontainer'><CreditCardIcon id='sidebaricon'/></span>
        Billing
      </div>
      <div id='RTLtile' className='tiles'>
      <span className='sidebariconcontainer'><BuildIcon id='sidebaricon'/></span>
        RTL
      </div>
      <div id='accountpages'>
        ACCOUNT PAGES
      </div>
      <div id='profiletile' className='tiles'>
      <span className='sidebariconcontainer'><PersonIcon id='sidebaricon'/></span>
       Profile
      </div>
      <div id='signintile' className='tiles'>
      <span className='sidebariconcontainer'><DescriptionIcon id='sidebaricon'/></span>
        Sign In
      </div>
      <div id='signuptile' className='tiles'>
      <span className='sidebariconcontainer'><RocketLaunchIcon id='sidebaricon'/></span>
        Sign Up
      </div>

      <div id='helpdoc'>
        Need help?
        <br/>
        Please read our docs
      </div>

      <div id='upgradebutton'>
        Upgrade to PRO
      </div>
    </div>
  )
}
