import React from 'react';
import Logo from './../../assets/pics/logo.png';
import Profile from './../../assets/pics/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBell ,faGears,faMoneyBillTrendUp,faFolderOpen}
 from '@fortawesome/free-solid-svg-icons';
 import './sideBar.css'

export default function SideBar() {
  return (
    <>
    
    <div className='position-relative ms-1 sidebar' 
    style={{backgroundColor:'var(--main-color)',width:'85px',height:'835px'}}>
      <div className='w-100' style={{paddingTop:'29px'}}>
        <img src={Logo} className='logo' ></img>
      </div>
      <div className='w-100' style={{marginTop:'50px'}}>
      <p className='active'>
        <span className=''>
        <FontAwesomeIcon className='mx-2 fs-4'
         icon={faBell} />
        <span className='head'>Alerts</span>
        </span>
      </p>
      <p className='active'>
      <span className=''>
        <FontAwesomeIcon className='mx-2 fs-4'
         icon={faGraduationCap} />
        <span className='head'>Training</span>
        </span>
      </p>
      <p className='inactive'>
      <span className=''>
        <FontAwesomeIcon className='mx-2 fs-4' 
         icon={faGears} />
        <span className='head'>Automation</span>
      </span>
      </p>
      <p className='inactive'>
      <span className=''>
        <FontAwesomeIcon className='mx-2 fs-4' 
         icon={faFolderOpen} />
        <span className='head'>Portfolio</span>
      </span>
      </p>
      <p className='inactive'>
      <span className=''>
        <FontAwesomeIcon className='mx-2 fs-4' 
         icon={faMoneyBillTrendUp} />
        <span className='head'>Trading</span>
      </span>
      </p>
      <div className='coming'>
          <span style={{opacity:'100%'}}>coming soon</span>
        </div>
      </div>
      <div className='w-100' style={{position:'absolute',bottom:'26px'}}>
        <img src={Profile} className='d-block m-auto'></img>
      </div>
    </div>
    </>
  )
}