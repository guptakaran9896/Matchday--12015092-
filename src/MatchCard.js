import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
const MatchCard = (props) => {
  const navigate = useNavigate()
    
  const handleclick = ()=>{

      navigate("/second")
  
 }
  return (
    <div className="match"  onClick={handleclick}>
    <div className='t-h1'>
    <h3>
     {props.tournament}
    </h3>
    <h4 style={{"margin-top":"1rem"}}>
      {props.round}
    </h4>
    </div>
    
    <div className="tourimg">
      <div className='winner'>
        <div className='crownimg' style={{width: 40, height: 40, borderRadius: 40/2}} >
        <img style={{width: 30, height: 20, borderRadius: 40/2,marginTop:0}} src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/08f830ae-ce65-42f5-b243-b7a3f8a15b5f/crown.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221128T053842Z&X-Amz-Expires=86400&X-Amz-Signature=d9fbc7d96048d9b689a0f99f373a119bc5b645638b879faac13ef9bea3415bf7&X-Amz-SignedHeaders=host&x-id=GetObject'/>
        <img style={{width: 40, height: 40, borderRadius: 40/2}}   src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg" alt="" />
        </div>
       <div className='winnername'> 
       <h6 >
        {props.winner}
       </h6>
       </div>
      </div>
      <div className='vs' >
       <h4>v/s</h4>
       <div className='date'>
    
        {props.a1}-{props.b1},{props.a2}-{props.b2},{props.a3}-{props.b3}
       </div>
       <div className='logo'>
        <img height={70} width ={70} src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/da00ca61-beb4-4735-8ff8-f6cff8597fc3/logo_white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221127T074432Z&X-Amz-Expires=86400&X-Amz-Signature=86a503a6138de0a27ed794a2c3cec00e5ac1be090dc6fc0187132364dd939a04&X-Amz-SignedHeaders=host&x-id=GetObject" alt="" />
       </div>
      </div>
      <div className="p-2">
      <img style={{width: 40, height: 40, borderRadius: 40/2}} src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg" alt="" />
      <div className='pl-2'> 
       <h6 >
        {props.name2}
       </h6>
       </div>
      </div>
     </div>
    </div>
  );
}

export default MatchCard;