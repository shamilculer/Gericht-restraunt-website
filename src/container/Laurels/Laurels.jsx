import React from 'react';

import './Laurels.css';
import {SubHeading} from "../../components"
import {images, data} from "../../constants"

const AwardCard = ({award}) => (
  <div className='app__laurels-awards_card'>
    <img src={award.imgUrl} alt='award img' />
    <div className='app__laurels-awards_card_content' >
      <p className='p__cormorant' style={{color:'#DCCA87'}}>{award.title}</p>
      <p className='p__cormorant'>{award.subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div id='awards' className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_info'>
      <SubHeading title='Awards & recognition' />
      <h1 className='headtext__cormorant'>Our Laurels</h1>
      <div className='app__laurels-awards'>
        {data.awards.map((award,index) =>( <AwardCard key={award.title + index} award={award} /> ))}
      </div>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.laurels} alt='laurels' />
    </div>
  </div>
);

export default Laurels;
