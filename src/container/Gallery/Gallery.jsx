import React, { useRef } from 'react';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs"

import './Gallery.css';
import {SubHeading} from "../../components"
import {images} from "../../constants"

const Gallery = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const {current} = scrollRef

    if(direction === 'left'){
      current.scrollLeft -= 300
    }else{
      current.scrollLeft += 300
    }
  }

  const galleryImages = [images.gallery01,images.gallery02,images.gallery03,images.gallery04]
  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content' >
        <SubHeading title='Instagram' />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{color:'#AAA', marginTop:'2rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type='button' className='custom__button'>View More</button>
      </div>

      <div className='app__gallery-images'>
        <div ref={scrollRef} className='app__gallery-images_container'>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images-card flex__center' key={index}>
              <img src={image} alt='gallery img' />
              <BsInstagram className='gallery-image_icon' />
            </div>
          ))}
        </div>
        
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery_arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery_arrow-icon' onClick={() => scroll('right') } />
        </div>
      </div>
    </div>
  )
}

export default Gallery;
