import React from 'react'
import './dashboardtiles.css'
import WalletIcon from '@mui/icons-material/Wallet';
import LanguageIcon from '@mui/icons-material/Language';
import DescriptionIcon from '@mui/icons-material/Description';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ApexLineChart from '../chart/Apexlinechart';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BuildIcon from '@mui/icons-material/Build';
import Apexcolumnchart from '../chart/Apexcolumnchart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Dashboardtiles() {
  return (
    <>
    <div id='dashboardtilescontainer'>
        
        <div id='money' className='dashboardtiles'>
            <span className='tiles_title'>Today's Money</span>
            <br/>
            <span className='tiles_subtitle'>$53,000</span>
            <span className='tilesprofit'> +55%</span>
            <span className='tilesiconcontainer'>
            <WalletIcon id='moneyicon' className='tilesicon'/>
            </span>
           

        </div>

        <div id='users' className='dashboardtiles'>
        <span className='tiles_title'>Today's Users</span>
            <br/>
            <span className='tiles_subtitle'>2,300</span>
            <span className='tilesprofit'> +3%</span>
            <span className='tilesiconcontainer'>
            <LanguageIcon id='usersicon' className='tilesicon'/>
            </span>

        </div>

        <div id='clients' className='dashboardtiles'>
          <span className='tiles_title'>New Clients</span>
            <br/>
            <span className='tiles_subtitle'>+3,642</span>
            <span className='tilesloss'> -2%</span>
            <span className='tilesiconcontainer'>
            <DescriptionIcon id='clientsicon' className='tilesicon'/>
            </span>

        </div>

        <div id='sales' className='dashboardtiles'>
          <span className='tiles_title'>Total Sales</span>
            <br/>
            <span className='tiles_subtitle'>$103,430</span>
            <span className='tilesprofit'> +5%</span>
            <span className='tilesiconcontainer'>
            <ShoppingCartIcon id='salesicon' className='tilesicon'/>
            </span>
        </div>

    
   
    </div>
{/*---------------------row 2-----------------------------*/}
    <div id='dashboardtilescontainer'>
             
        <div id='welcome' className='dashboardtiles'>
            <div className='tiles_title' id='welcometitle'>Welcome back,</div>
            <br/>
            <div className='tiles_subtitle' id='welcomename'>Mark Johnson</div>
            <br/>
            <div className='tiles_title' id='welcomesubtitle'>Glad to see you again!</div>
            
            <div className='tiles_title' id='welcomesubtitle'>Ask me anything</div>
        </div>

        <div id='satisfaction' className='dashboardtiles'>
            <div className='tiles_subtitle' id='satisfactiontitle'>Satisfaction Rate</div>
            <br/>
            <div className='tiles_title' id='satisfactionsubtitle'>From all projects</div>
            <br/>
            
            <span className='tilesiconcontainer' id='smilecontainer'>
                 <EmojiEmotionsIcon id='smile' className='tilesicon'/>
            </span>
            <span className='progresscircle'>

            </span>
         

            <div className='dashboardtiles' id='satisfactionprogress'>
                <span className='tilesprofit' id='satisfaction0'>0%</span>
                <span className='tiles_subtitle' id='satisfactionrate'>
                    95%
                    <br/>
                    <span className='tilesprofit' id='ratedesc'>Based on likes</span>
                </span>
                <span className='tilesprofit' id='satisfaction100'>100%</span>
               
            </div>
        </div>


        <div className='dashboardtiles' id='referral'>
             <span className='tiles_subtitle'>Referral Tracking</span>
            <span className='tilesiconcontainer'>
            <MoreHorizOutlinedIcon id='moredots' className='tilesicon'/>
            </span>
            <br/>
            <span className='dashboardtiles' id='invited'>
                <span className='tiles_title' id='invitedtitle'>Invited</span>
                <span className='tiles_subtitle'><br/>145<br/>people</span>

            </span>
            <span className='dashboardtiles' id='bonus'>
                <span className='tiles_title' id='bonustitle'>Bonus</span>
                <span className='tiles_subtitle'><br/>1,465</span>

            </span>

            <span className='dashboardtiles' id='safetycirclecontainer'>
                <span id='safetytextcontainer'>
                <span className='tiles_title' id='safetytitle'>Safety</span>
                <br/>
                <span className='tiles_subtitle' id='safetyscore'>9.3</span>
                <br/>
             
                <span className='tiles_title' id='safetysubtitle'>Total Score</span>
                </span>
                
            </span>

        </div>

    </div>


    {/*----------------------------row3---------------------------------*/}

    <div id='dashboardtilescontainer'>
        <div id='salesoverview' className='dashboardtiles'>
            <span className='tiles_subtitle'>Sales Overview</span>
            <span className='tilesprofit'><br/>+5% more</span>
            <span className='tiles_title'> in 2021</span>
            <span id='chartcontainer'>
            <ApexLineChart  id='saleschart'/>
            </span>
           
        </div>

        <div id='activeusers' className='dashboardtiles'>
            <span id='chartcontainer'>
            <Apexcolumnchart  id='userschart'/>
            </span>
            <span id='activeuserstitle'>
                <span className='tiles_subtitle'>Active Users</span>
                <br/>
                <span className='tilesprofit'>(+23)</span>
                <span className='tiles_title'> than last week</span>

            </span>
            <br/>

            <span id='activeusersfooter'>
                <span id='footer1' className='footertile'>
                    <span className='tilesiconcontainer' id='footericoncontainer'>
                        <WalletIcon className='tilesicon' id='footericon'/>
                    </span>
                    <span className='tiles_title'>Users</span>
                    <br/>
                    <span className='tiles_subtitle'>32,984</span>
                </span>

                <span id='footer2' className='footertile'>
                    <span className='tilesiconcontainer' id='footericoncontainer'>
                        <RocketLaunchIcon className='tilesicon' id='footericon'/>
                    </span>
                    <span className='tiles_title'>Clicks</span>
                    <br/>
                    <span className='tiles_subtitle'>2,42M</span>
                </span>

                <span id='footer3' className='footertile'>
                    <span className='tilesiconcontainer' id='footericoncontainer'>
                        <ShoppingCartIcon className='tilesicon' id='footericon'/>
                    </span>
                    <span className='tiles_title'>Sales</span>
                    <br/>
                    <span className='tiles_subtitle'>2,400$</span>
                </span>

                <span id='footer4' className='footertile'>
                    <span className='tilesiconcontainer' id='footericoncontainer'>
                        <BuildIcon className='tilesicon' id='footericon'/>
                    </span>
                    <span className='tiles_title'>Items</span>
                    <br/>
                    <span className='tiles_subtitle'>320</span>
                </span>
            </span>


        </div>
    </div>


    {/*----------------------------row4------------------------------------*/}

    <div id='dashboardtilescontainer'>
        <div id='projects' className='dashboardtiles'>
            <span className='tiles_subtitle'>Projects</span>
            <br/>
            <CheckCircleIcon id='checkicon'/>
            <span className='tiles_title'>30 done this month</span>

            <table>
                <tr>
                    <th id='companiescolumn'>COMPANIES</th>
                    <th id='memberscolumn'>MEMBERS</th>
                    <th id='budgetcolumn'>BUDGET</th>
                    <th id='completioncolumn'>COMPLETION</th>
                </tr>
                <tr>
                    <td id='companiesdata'>
                        <img src='/assets/adobexd.svg' alt='xdlogo' id='xdlogo' className='tablelogo'/>
                        Chakra Vision UI Version</td>
                    <td className='membersdata'>
                        <span className='memberpiccontainer'>
                            <span className='memberpic' id='member1pic'>
                                <img alt='member1' src='https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar1.1d9e1978.png' className='memberimg' id='member1'></img>
                 
                            </span>
                            <span className='imgnamecontainer' id='m1namecontainer'>
                                 <span className='imgname' id='member1name'>Sasha Lynch</span>

                            </span>

             
                            <span className='memberpic' id='member2pic'>
                                <img alt='member2' src='https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar2.b8132c3c.png' className='memberimg' id='member2'></img>
                            </span>
                            <span className='imgnamecontainer' id='m2namecontainer'>
                                 <span className='imgname' id='member2name'>Ryan Tompson</span>

                            </span>


                            <span className='memberpic' id='member3pic'>
                                <img alt='member3' src='https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar3.4d26ce02.png' className='memberimg' id='member3'></img>
                            </span>
                            <span className='imgnamecontainer' id='m3namecontainer'>
                                 <span className='imgname' id='member3name'>Romina Hadid</span>

                            </span>


                            <span className='memberpic' id='member4pic'>
                                <img alt='member4' src='https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar4.2a4ba26c.png' className='memberimg' id='member4'></img>
                            </span>
                            <span className='imgnamecontainer' id='m4namecontainer'>
                                 <span className='imgname' id='member4name'>Jessica Doe</span>

                            </span>


            
                        </span>


                    </td>
                    <td id='budgetdata'>$14,000</td>
                    <td className='completiondata' id='completion1'>60%
                         
                        <span className='progressbar'>
                            
                            <span id='progress1' className='progressvalue'>

                            </span>
                        </span>
                    </td>
                </tr>


                <tr>
                    <td id='companiesdata'>
                    <img src='/assets/azure.svg' alt='azurelogo' id='azurelogo' className='tablelogo'/>
                    Add Progress Track</td>
                    <td className='membersdata'>
                    <span className='memberpiccontainer'>
              
                            <span className='memberpic' id='member2pic'>
                                <img alt='member2' src='https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar2.b8132c3c.png' className='memberimg' id='member2'></img>
                            </span>
                            <span className='imgnamecontainer' id='m2namecontainer'>
                                 <span className='imgname' id='member2name'>Ryan Tompson</span>

                            </span>

                          
                            <span className='memberpic' id='member4pic'>
                                <img alt='member4' src='https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar4.2a4ba26c.png' className='memberimg' id='member4'></img>
                            </span>
                            <span className='imgnamecontainer' id='m4namecontainer'>
                                 <span className='imgname' id='member4name'>Jessica Doe</span>

                            </span>

                        </span>
                    </td>
                    <td id='budgetdata'>$3,000</td>
                    <td className='completiondata' id='completion2'>10%
                    <span className='progressbar'>
                            
                            <span id='progress2' className='progressvalue'>

                            </span>
                        </span>
                    </td>
                </tr>



                <tr>
                    <td id='companiesdata'>
                      <img src='/assets/slack.svg' alt='slacklogo' id='slacklogo' className='tablelogo'/>
                        Fix Platform Errors</td>
                    <td className='membersdata'>
                    <span className='memberpiccontainer'>
                            <span className='memberpic' id='member1pic'>
                                <img alt='member1' src='https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar1.1d9e1978.png' className='memberimg' id='member1'></img>
                            </span>
                            <span className='imgnamecontainer' id='m1namecontainer'>
                                 <span className='imgname' id='member1name'>Sasha Lynch</span>

                            </span>
                   
                         
                            <span className='memberpic' id='member3pic'>
                                <img alt='member3' src='https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar3.4d26ce02.png' className='memberimg' id='member3'></img>
                            </span>
                            <span className='imgnamecontainer' id='m3namecontainer'>
                                 <span className='imgname' id='member3name'>Romina Hadid</span>

                            </span>
                          
                        </span>
                    </td>
                    <td id='budgetdata'>Not set</td>
                    <td className='completiondata' id='completion3'>100%
                    <span className='progressbar'>
                            
                            <span id='progress3' className='progressvalue'>

                            </span>
                        </span>
                    </td>
                </tr>



                <tr>
                    <td id='companiesdata'>
                      <img src='/assets/spotify.svg' alt='spotifylogo' id='spotifylogo' className='tablelogo'/>

                        Launch our Mobile App</td>
                    <td className='membersdata'>
                    <span className='memberpiccontainer'>
                            <span className='memberpic' id='member4pic'>
                                <img alt='member4' src='https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar4.2a4ba26c.png' className='memberimg' id='member4'></img>
                            </span>
                            <span className='imgnamecontainer' id='m4namecontainer'>
                                 <span className='imgname' id='member4name'>Jessica Doe</span>

                            </span>

           
                            <span className='memberpic' id='member3pic'>
                                <img alt='member3' src='https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar3.4d26ce02.png' className='memberimg' id='member3'></img>
                            </span>
                            <span className='imgnamecontainer' id='m3namecontainer'>
                                 <span className='imgname' id='member3name'>Romina Hadid</span>

                            </span>


                            <span className='memberpic' id='member2pic'>
                                <img alt='member2' src='https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar2.b8132c3c.png' className='memberimg' id='member2'></img>
                            </span>
                            <span className='imgnamecontainer' id='m2namecontainer'>
                                 <span className='imgname' id='member2name'>Ryan Tompson</span>

                            </span>
                           
                            

                            <span className='memberpic' id='member1pic'>
                                <img alt='member1' src='https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar1.1d9e1978.png' className='memberimg' id='member1'></img>
                            </span>
                            <span className='imgnamecontainer' id='m1namecontainer'>
                                 <span className='imgname' id='member1name'>Sasha Lynch</span>

                            </span>
                           

            
                    </span>
                    </td>
                    <td id='budgetdata'>$20,500</td>
                    <td className='completiondata' id='completion4'>100%
                    <span className='progressbar'>
                            
                            <span id='progress4' className='progressvalue'>

                            </span>
                        </span>
                    </td>
                </tr>



                <tr>
                    <td id='companiesdata'>
                    <img src='/assets/jira.svg' alt='jiralogo' id='jiralogo' className='tablelogo'/>

                        Add the New Pricing Page</td>
                    <td className='membersdata'>
                    <span className='memberpiccontainer'>
                            <span className='memberpic' id='member4pic'>
                                <img alt='member4' src='https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar4.2a4ba26c.png' className='memberimg' id='member4'></img>
                            </span>
                            <span className='imgnamecontainer' id='m4namecontainer'>
                                 <span className='imgname' id='member4name'>Jessica Doe</span>

                            </span>

            
                        </span>
                   
                    </td>
                    <td id='budgetdata'>$500</td>
                    <td className='completiondata' id='completion5'>25%
                    <span className='progressbar'>
                            
                            <span id='progress5' className='progressvalue'>

                            </span>
                        </span>
                    </td>
                </tr>



                <tr>
                    <td id='companiesdata'>
                    <img src='/assets/invision.svg' alt='invisionlogo' id='invisionlogo' className='tablelogo'/>

                        Redesign New Online Shop</td>
                    <td className='membersdata'>
                    <span className='memberpiccontainer'>
                            <span className='memberpic' id='member1pic'>
                                <img alt='member1' src='https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar1.1d9e1978.png' className='memberimg' id='member1'></img>
                            </span>
                            <span className='imgnamecontainer' id='m1namecontainer'>
                                 <span className='imgname' id='member1name'>Sasha Lynch</span>

                            </span>


                            <span className='memberpic' id='member4pic'>
                                <img alt='member4' src='https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar4.2a4ba26c.png' className='memberimg' id='member4'></img>
                            </span>
                            <span className='imgnamecontainer' id='m4namecontainer'>
                                 <span className='imgname' id='member4name'>Jessica Doe</span>

                            </span>
                         
                          
                        </span>
                    </td>
                    <td id='budgetdata'>$2,000</td>
                    <td className='completiondata' id='completion6'>40%
                    <span className='progressbar'>
                            
                            <span id='progress6' className='progressvalue'>

                            </span>
                        </span>
                    </td>
                </tr>
            </table>
        </div>


        <div className='dashboardtiles' id='orderscontainer'>
            <span className='tiles_subtitle'>Orders Overview</span>
            <br/>
            <CheckCircleIcon id='checkicon'/>
            <span className='tiles_title'>+30% this month</span>
            <span id='listcontainer'>
            <ul>
                <li id='listitem1'>
                    <span className='tiles_subtitle' id='listtitle'>
                    $2400, Design changes<br/>
                    <span className='tiles_title' id='listsubtitle'>22 DEC 7:20 PM</span>
                </span>
                </li>

                <li id='listitem2'>
                <span className='tiles_subtitle' id='listtitle'>
                    New order #1832412<br/>
                    <span className='tiles_title'  id='listsubtitle'>21 DEC 11 PM</span>
                </span>
                </li>

                <li id='listitem3'>
                <span className='tiles_subtitle'id='listtitle'>
                    Server payments for April<br/>
                    <span className='tiles_title'  id='listsubtitle'>21 DEC 9:34 PM</span>
                </span>
                </li>

                <li id='listitem4'>
                <span className='tiles_subtitle'id='listtitle'>
                    New card added for order #4395133<br/>
                    <span className='tiles_title'  id='listsubtitle'>20 DEC 2:20 AM</span>
                </span>
                </li>

                <li id='listitem5'>
                <span className='tiles_subtitle'id='listtitle'>
                New card added for order #4395133<br/>
                    <span className='tiles_title'  id='listsubtitle'>18 DEC 4:54 AM</span>
                </span>
                </li>

                <li id='listitem6'>
                <span className='tiles_subtitle'id='listtitle'>
                    New order #9583120<br/>
                    <span className='tiles_title'  id='listsubtitle'>17 DEC 6:07 PM</span>
                </span>
                </li>
            </ul>
            </span>
            
            
        </div>
    </div>

   
    </>
  )
}
