import React,{useState} from 'react';
import Logo from './../../assets/pics/logo.png';
import Profile from './../../assets/pics/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import { faGraduationCap, faBell ,faGears,faMoneyBillTrendUp,faFolderOpen}
 from '@fortawesome/free-solid-svg-icons';
 import './sideBar.css'

export default function SideBar() {
  const navigate = useNavigate();
  
  return (
    <>
    
    <div className='sidebar' style={{backgroundColor:'var(--main-color)'}}>
      <div className='w-100 pt-4' >
        <img src={Logo} className='logo'></img>
      </div>
      <div className='w-100 mt-5'>
      <p className='active' onClick={()=>{navigate(`/`)}}>
        <FontAwesomeIcon className='mx-2 fs-4' icon={faBell} />
        <span className='head'>Alerts</span>
      </p>
      <p className='active' onClick={()=>{navigate(`/training`)}}>
        <FontAwesomeIcon className='mx-2 fs-4' icon={faGraduationCap} />
        <span className='head'>Training</span>
      </p>
      <p className='inactive'>
        <FontAwesomeIcon className='mx-2 fs-4' icon={faGears} />
        <span className='head'>Automation</span>
        <div className='coming' >
          <span>coming soon</span>
        </div>
      </p>
      <p className='inactive'>
        <FontAwesomeIcon className='mx-2 fs-4' icon={faFolderOpen} />
        <span className='head'>Portfolio</span>
        <div className='coming' >
          <span>coming soon</span>
        </div>
      </p>
      <p className='inactive'>
        <FontAwesomeIcon className='mx-2 fs-4' icon={faMoneyBillTrendUp} />
        <span className='head'>Trading</span>
        <div className='coming' >
          <span>coming soon</span>
        </div>
      </p>
      </div>
      <div className='w-75' style={{position:'absolute',bottom:'26px'}}>
        <div className='d-flex'>
        <img src={Profile} className='d-block m-auto'></img>
        <div className='name'>
          <span style={{display:'block',color:'white',fontWeight:'bold',fontSize:'15px'}}>Moni Roy</span>
          <span style={{display:'block',color:'#979797',fontSize:'13px'}}>Beginner</span>
        </div>
        </div>
        
        <span  className='foot'>Street Suit. 2.0</span>
      </div>
    </div>
    </>
  )
}