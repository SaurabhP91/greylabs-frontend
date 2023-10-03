import React from 'react'
import './dashboard.css'

import Topbar from '../../components/dashboardtopbar/Topbar';
import Dashboardtiles from '../../components/dashboardtiles/Dashboardtiles';


export default function Dashboard() {
  return (
    <>
    <div id='dashboardpage'>
    <Topbar/>
    <Dashboardtiles/>
    </div>
    
    </>
    


    
    
  )
}
