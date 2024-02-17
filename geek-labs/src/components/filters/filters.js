import React from 'react';
import './filters.css'

export default function Filters() {
  return (
    <>
    <div className='filter-container' style={{backgroundColor:'var(--main-color)'}}>
      <div>
        <h1>Filters</h1>
      </div>
      <div className='mx-auto' style={{width:'378px',height:'75px'}}>
        <div>
          <span>filters applied</span>
          <span>cear all</span>
        </div>
        <div style={{width:'378px',height:'51px',backgroundColor:'var(--secondary-color)'}}></div>
      </div>
      <div className='mx-auto' style={{width:'378px',height:'555px',backgroundColor:'var(--secondary-color)',marginTop:'20px',marginBottom:'30px'}}></div>
      <div>
        <a className='btn' style={{width:'161px',height:'43px',color:'white', backgroundColor:'var(--accent-color)'}}>Apply</a>
      </div>
    </div>
    {/* <FontAwesomeIcon icon="fa-light fa-heart" />
    <FontAwesomeIcon icon="fa-solid fa-recycle" />
    <FontAwesomeIcon icon="fa-light fa-bolt" />
    <FontAwesomeIcon icon="fa-regular fa-credit-card" />
    <FontAwesomeIcon icon="fa-light fa-cart-shopping" />
    <FontAwesomeIcon icon="fa-light fa-house" />
    <FontAwesomeIcon icon="fa-solid fa-wrench" />
    <FontAwesomeIcon icon="fa-regular fa-comments" />
    <FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench" /> */}
    </>
  )
}