import React from 'react';
import './searchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faBell} from '@fortawesome/free-solid-svg-icons';

export default function SearchBar() {
  return (
    <>
    <div style={{display:'flex',position:'absolute',left:'136px',top:'19px'}}>
      <div style={{display:'flex'}}>
        <div style={{width:'5px',height:'55px',borderRadius:'3px',backgroundColor:'var(--accent-color)'}}></div>
        <p className='my-auto text-light fs-1 m-2' style={{fontWeight:'bold'}}>ALERTS</p>
      </div>
      <div class="search-container my-auto mx-2 input-group">
        <form>
          <input className='' type="search"name="search" placeholder='Search By...' style={{backgroundColor:'var(--secondary-color)',borderStyle:'none'}}/>
          <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
      </div>
      <div className='my-auto position-relative'>
        <span style={{fontSize: '12px',position:'absolute',color:'white', left:'52%',bottom:'55%',backgroundColor:'var(--green-color)' ,width:'15px',height:'15px',borderRadius:'50%'}}>
          <span style={{position:'absolute' ,left:'25%',fontWeight:'bold'}}>6</span>
        </span>
      <FontAwesomeIcon className='mx-2 fs-4' style={{color:'var(--accent-color)'}}
         icon={faBell} />
      </div>
    </div>
    </>
  )
}