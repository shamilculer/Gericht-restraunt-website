import React, { useRef, useState } from 'react';
import {BsFillPlayFill, BsPauseFill} from "react-icons/bs"

import './Intro.css';
import {meal} from "../../constants"

const Intro = () => {
  const [palyVideo, setPlayVideo] = useState(false)
  const vidRef = useRef()

  const handleVideo = () =>{
    setPlayVideo(!palyVideo)

    if(palyVideo){
      vidRef.current.pause()
    }else{
      vidRef.current.play()
    }
  }

  return(
    <div className='app__video'>
      <video
        src={meal}
        controls={false}
        type='video/mp4'
        ref={vidRef}
        loop
        muted
      />
      <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay_circle flex__center' onClick={handleVideo}>
          {palyVideo ? <BsPauseFill color='#fff' fontSize={32} /> : <BsFillPlayFill color='#fff' fontSize={32} />}
        </div>
      </div>
    </div>
  )
}

export default Intro;
