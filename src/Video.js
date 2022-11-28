import React,{useRef} from 'react'
import videomatch from "./videomatch.mp4"
import './App.css';
function Video() {
    const videoRef=useRef(null);
    const handlePlay=()=>{
        videoRef.current.play();
    }
    const handlePause=()=>{
        videoRef.current.pause();
    }
    


const handleforward=()=>{
  skip(5);
}

const handlebackward=()=>{
   skip(-5);
}

const skip=(time)=>{
    
  document.getElementById("videoId").currentTime+=time;

}

  return (
    <div   >
    <div className="heading">
        Video Analytics
    </div>
    <div className="video">
        <video id='videoId' controls src={videomatch} width="50%" ref={videoRef} />

    </div>
    <div className="buttons">
    <div className="one">
        <button className='buttons1' onClick={handlePlay}>Play</button>
    </div>
    <div className="two">
        <button className='buttons1' onClick={handlePause}>Pause</button>

    </div>
    <div className="three">
        <button className='buttons1' onClick={handleforward}>5 sec forward</button>

    </div>
    <div className="four">
        <button className='buttons1' onClick={handlebackward}>5 sec backward</button>

    </div>

    </div>
    </div>
  )
}

export default Video