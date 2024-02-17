import React,{useState} from 'react';
import './filters.css'
import HealthCare from './../../assets/pics/healthCare.png'
import Matrials from './../../assets/pics/matrials.png'
import Energy from './../../assets/pics/energy.png'
import Discretionary from './../../assets/pics/discretionary.png'
import Staples from './../../assets/pics/staples.png'
import Estate from './../../assets/pics/estate.png'
import It from './../../assets/pics/it.png'
import Communications from './../../assets/pics/communications.png'
import Industrials from './../../assets/pics/industrials.png'
import Utilities from './../../assets/pics/utilities.png'
import Financials from './../../assets/pics/financials.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark,faMagnifyingGlass,faSortDown} from '@fortawesome/free-solid-svg-icons';

export default function Filters() {
  const [filtersApplied,setFiltersApplied] = useState([])
  const filters1 = [{name:'Health Care',photo:HealthCare},
  {name:'Matrials',photo:Matrials},
  {name:'Energy',photo:Energy},
  {name:'Consumer Discretionary',photo:Discretionary},
  {name:'Consumer Staples',photo:Staples},
  {name:'Real Estate',photo:Estate}
  ]
  const filters2 = [
  {name:'It',photo:It},
  {name:'Communications',photo:Communications},
  {name:'Industrials',photo:Industrials},
  {name:'Utilities',photo:Utilities},
  {name:'Financials',photo:Financials}]

  const handleAdd = (filter)=>{
    for (let i = 0; i < filtersApplied.length; i++) {
      if(filtersApplied[i].name == filter.name){
        return;
      }}
    setFiltersApplied([
        ...filtersApplied,
        filter
      ]);
    }
  const handleDelete = (filter) => {
    setFiltersApplied(filtersApplied.filter((filt) => filt !== filter));
  };
  return (
    <>
    <div className='filter-container' style={{backgroundColor:'var(--main-color)'}}>
      <div className='filter-header'>Filters</div>
      <div className='mx-auto' style={{width:'88%',height:'75px'}}>
        <div className='d-flex' style={{fontSize:'13px'}}>
          <span className='me-auto' style={{color:'#979797'}}>Filters applied</span>
          <span className='d-block ms-auto' style={{color:'white'}}>Clear all</span>
        </div>
        <div className='filter-scroll' style={{overflow:'scroll',width:'100%',height:'51px',backgroundColor:'var(--back-color)',borderRadius:'7px'}}>
          {filtersApplied?.map((filter,index)=>{
            return(
              <span className="filters-applied" style={{color:'var(--main-color)',backgroundColor:'var(--accent-color)'}}>
                <span style={{margin:'5px',color:'202020'}}>{filter.name}</span>
                <FontAwesomeIcon className="my-auto pt-2 pe-1" icon={faXmark} onClick={()=>{handleDelete(filter)}} />
              </span>
            )
          })}
          
        </div>
      </div>
      <div className='mx-auto filter-stock' style={{backgroundColor:'var(--back-color)'}}>
        <span className='stock-header'>Stock</span>
        <div class="search-filter input-group">
        <form>
          <input className='' type="search"name="search" placeholder='   $  TICKER' 
          style={{backgroundColor:'var(--secondary-color)',borderStyle:'none'}}/>
          <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
      </div>
      <div style={{position:'absolute',top:'80px',left:'30px',width:'338px',height:'188px'}}>
        <span style={{fontWeight:'bold',color:'white',fontSize:'14px'}}>
          <FontAwesomeIcon style={{margin:'3px'}} icon={faSortDown} />
        <span style={{margin:'7px'}}>Industry</span></span>
        <div style={{display:'flex'}}>
        <div className='filters'>
          {filters1.map((filter,index)=>{
            return(
              <div className='filter-element' onClick={()=>{handleAdd(filter)}}>
                <img src={filter.photo} className='mx-2 my-1'/>
                <span>{filter.name}</span>
              </div>
            )
          })}
        </div>
        <div className='filters h-75'>
        {filters2.map((filter,index)=>{
            return(
              <div className='filter-element' onClick={()=>{handleAdd(filter)}}>
                <img src={filter.photo} className='mx-2 my-1'/>
                <span>{filter.name}</span>
              </div>
            )
          })}
        </div>
      </div>
      </div>
      <div style={{display:'flex',position:'absolute',top:'270px',left:'30px'}}>
        <div style={{color:'white'}}>
        <span style={{fontWeight:'bold', fontSize:"15px"}}>
          <FontAwesomeIcon style={{margin:'3px'}} icon={faSortDown} />
          <span style={{margin:'7px'}}>Market Cap</span></span>
        <div style={{marginLeft:'23px',marginTop:'15px'}}>
        <label class="d-block" style={{fontSize:'13px',margin:'3px'}}>
          <input style={{marginRight:'10px'}} type="radio" checked="checked" name="cap"/>
          Micro
        </label>
        <label class="d-block" style={{fontSize:'13px',margin:'3px'}}>
          <input style={{marginRight:'10px'}} type="radio" name="cap"/>
          Small
        </label>
        <label class="d-block" style={{fontSize:'13px',margin:'3px'}}>
         <input style={{marginRight:'10px'}} type="radio" name="cap"/>
         Large
        </label>
        </div>
        </div>
        <div style={{marginLeft:'50px',color:'white'}}>
        <span style={{fontWeight:'bold', fontSize:"15px"}}>
          <FontAwesomeIcon style={{margin:'3px'}} icon={faSortDown} />
          <span style={{margin:'7px'}}>Risk Level</span></span>
        <div style={{marginLeft:'23px',marginTop:'15px'}}>
        <label class="d-block" style={{fontSize:'13px',margin:'3px'}}>
          <input style={{marginRight:'10px'}} type="radio" checked="checked" name="risk"/>
          Low Risk
        </label>
        <label class="d-block" style={{fontSize:'13px',margin:'3px'}}>
          <input style={{marginRight:'10px'}} type="radio" name="risk"/>
          Mid Risk
        </label>
        <label class="d-block" style={{fontSize:'13px',margin:'3px'}}>
         <input style={{marginRight:'10px'}} type="radio" name="risk"/>
         High Risk
        </label>
        </div>
        </div>
      </div>
      <div style={{display:'flex',position:'absolute',top:'390px',left:'30px'}}>
        <div style={{width:'119px',height:'105px',textAlign:'center'}}>
          <span style={{margin:'10px',display:'block',color:'white',fontWeight:'bold',fontSize:'15px'}}>Strategy</span>
          <div style={{width:'119px',height:'73px',fontSize:'12px'}}>
            <span className='d-block mx-auto' style={{color:'var(--secondary-color)'}}>Big Option Buys </span>
            <span className='d-block mx-auto' style={{color:'white',backgroundColor:'var(--accent-color)',borderRadius:'5px',textAlign:'center'}}>Merger Arbitrage </span>
            <span className='d-block mx-auto' style={{color:'var(--secondary-color)'}}>Short Reports </span>
          </div>
        </div>
        <div style={{width:'119px',height:'105px',textAlign:'center',marginLeft:'50px'}}>
          <span style={{margin:'10px',display:'block',color:'white',fontWeight:'bold',fontSize:'15px'}}>Assets</span>
          <div style={{width:'119px',height:'73px',fontSize:'12px'}}>
            <span className='d-block mx-auto' style={{color:'var(--secondary-color)'}}>Stocks </span>
            <span className='d-block mx-auto' style={{color:'white',backgroundColor:'var(--accent-color)',borderRadius:'5px',textAlign:'center'}}>Options </span>
            <span className='d-block mx-auto' style={{color:'var(--secondary-color)'}}>Futures</span>
          </div>
        </div>
      </div>
      </div>
      <a className='btn d-block mx-auto my-auto' style={{fontWeight:'bold',width:'161px',height:'43px',color:'white', backgroundColor:'var(--accent-color)'}}>Apply</a>
    </div>
    </>
  )
}