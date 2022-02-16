import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding '>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.Julie} alt='chef'></img>
    </div>
    
    <div className='app__wrapper_info '>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What we believe in </h1>

      <div className='app__chef-content'>
        <div className='app__chef-cntent_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'> People who love to eat are always the best people.</p>

        </div>
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti libero nesciunt quibusdam qui officia sequi! Autem totam adipisci necessitatibus dolores consequatur perferendis illo voluptatem aliquam?</p>
        <div>
          <p>JULIE GOODWIN</p>

        </div>
      </div>
    </div>
  </div>
);

export default Chef;
