import React,{useState} from 'react';
import HighRisk from './../../assets/pics/highRisk.png'
import LowRisk from './../../assets/pics/lowRisk.png'
import Sheet from './../../assets/pics/sheet.png'
import DollarSign from './../../assets/pics/dollarSign.png'
import Persent from './../../assets/pics/persent.png'
import './alerts.css'

export default function Alerts() {
  const [selectedElement,setSelectedElement]  = useState(null)
  const ApiSample=[{id:1,highRisk:true,persent:0.25,amount:200,sign:'TSLA'},
  {id:2,highRisk:true,persent:0.25,amount:200,sign:'TSLA'},
  {id:3,highRisk:false,persent:-0.25,amount:300,sign:'ABQQ'},
  {id:4,highRisk:true,persent:0.3,amount:400,sign:'MSFT'},
  {id:5,highRisk:true,persent:-0.05,amount:100,sign:'PYPL'},
  {id:6,highRisk:false,persent:-0.45,amount:150,sign:'NFLX'},
  {id:7,highRisk:true,persent:0.02,amount:230,sign:'AMZN'},
  {id:8,highRisk:true,persent:0.25,amount:200,sign:'TSLA'},
  {id:9,highRisk:false,persent:-0.25,amount:300,sign:'ABQQ'},
  {id:10,highRisk:true,persent:0.3,amount:400,sign:'MSFT'},
  {id:11,highRisk:true,persent:-0.05,amount:100,sign:'PYPL'},
  {id:12,highRisk:false,persent:-0.45,amount:150,sign:'NFLX'}
]
const handeClick = (event,id)=>{
  if(selectedElement === id){
    setSelectedElement(null)
  }else{
  setSelectedElement(id)
  }
}
  return (
    
    <>
    <div className='scroll'>
      {ApiSample.map((sample,index)=>{
        return(
          <div key={sample.id}
          style={{marginBottom:'16px',borderRadius:'8px',backgroundColor:'var(--main-color)'}}>
          <div  onClick={(event)=>{handeClick(event,sample.id)}} 
          style={{zIndex: '1',display:'flex',width:'100%',height:'53px',
          backgroundColor:selectedElement == sample.id ? 'var(--accent-color)' :'var(--secondary-color)',borderRadius:'8px'}}>
        <div  className='my-auto d-flex' style={{fontSize:'14px',width:'24.8%',height:'80%'}}>
          <img className='my-auto mx-5' src={DollarSign}></img>
          <span className='my-auto text-light me-5'>{sample.sign}</span>
        </div>
        <span className='my-auto' style={{width:'2px',height:'36px',fontSize:'14px',
        backgroundColor:selectedElement == sample.id ? 'white':'#414040',borderRadius:'0.5px',}}></span>
        <div  className='my-auto d-flex' style={{width:'24.8%',height:'80%'}}>
        <img className='my-auto mx-5' src={Sheet}></img>
        <span className='my-auto text-light me-5'>{sample.amount}</span>
        </div>
        <span  className='my-auto' style={{width:'2px',height:'36px',
        backgroundColor:selectedElement == sample.id ? 'white':'#414040',borderRadius:'0.5px',}}></span>
        <div  className='my-auto d-flex' style={{width:'24.8%',height:'80%'}}>
        <img className='my-auto ms-5 me-4' src={Persent}></img>
        <span className='my-auto' 
        style={{fontSize:'14px', color:sample.persent >= 0 ? 'var(--green-color)':'var(--orange-color)'}}>{sample.persent}%</span>
        </div>
        <span  className='my-auto' style={{width:'2px',height:'36px',backgroundColor:selectedElement == sample.id ? 'white':'#414040',borderRadius:'0.5px',}}></span>
        <div  className='my-auto d-flex' style={{width:'24.8%',height:'80%',fontSize:'14px'}}>
        <img className='my-auto mx-4' src={sample.highRisk == true ? HighRisk:LowRisk}></img>
        <span className='my-auto text-light me-3'>{sample.highRisk == true ? <span>High Risk</span>:<span>Low Risk</span>}</span>
        </div>
      </div>
        <p id = {sample.id}className='text-light' style={{display:selectedElement == sample.id ? '':'none',width:'85%',height:'150px',marginTop:'20px',marginLeft:'50px'}}>
          <span style={{lineHeight: '50px'}}><span style={{fontWeight:'bold'}}> $TSLA </span> just announced an acquisition of 
          <span style={{fontWeight:'bold'}}> $NFLX </span>
           at <span style={{fontWeight:'bold'}}>$200 B.</span></span><br/>this is an 
           <span style={{textDecorationLine: 'underline',color:'var(--accent-color)'}}> arbitrage opportunity</span>
          , with the max gain being %X if the deal closes, but the possible risk
          is %Y if the deal fails, if the deal success is % and therefore the recommended play is 
          <span style={{textDecorationLine: 'underline',color:'var(--accent-color)'}}> long/short</span> $ABC
        </p>
      </div>
        )
      })}
      
    </div>
    </>
  )
}