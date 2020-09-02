import React,{useState} from 'react'
import './Banner.css';
import ReactPlayer from 'react-player';

import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';


export default function Banner() {
    const [play, setPlay]=useState(false);
    const [mute, setMute]=useState(false);
    
    const onPause = (p)=>setPlay(false)
    const onPlay = (p)=>setPlay(true)
    function onMuted(){
        setMute((mute)=>!mute)
    }
    return (
       
            <div className="banner">
            <div className="banner__video">
                <ReactPlayer url="/Dme2.mp4" width="100%" height="600px" playing={play} muted={mute}/>
            </div>
            <div className="banner__details">
                <h1 className="movie__title">
                    <img src={"/img/dme.svg"} alt="Decicable Me"/>
                </h1>
                <p className="movie__detail">He's an evil villain who's plotting to steal the moon. But not if three little girls have anything to say about it!</p>
                <div className="movie__button">
                    <button onClick={onPlay}>Play</button>
                    <button onClick={onPause}>Pause</button>
                </div>
                <div className="movie__sound">
                    <button onClick={onMuted}>
                        {mute?<VolumeOffIcon/>:<VolumeUpIcon/>}
                    </button>
                    <span>M</span> 
                </div>
            </div>          
        </div>
    )
}
