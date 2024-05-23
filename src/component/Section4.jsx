import React from 'react';
import {Image} from 'react-bootstrap';
// import pointer from './Images/pointer.png';
import fourthh from './Images/about-img.jpg';

export default function Section4() {
  return (
    <>
    {/* <div className="ff2"> </div>      
    <div className="patti"> </div> */}
    <section id="four">

    <div className="fourthcat" id="Section4" ref={Section4}>
      <h1>
        {' '}
        {/* <Image src={pointer} alt="" /> */}
        ABOUT US
        {/* <Image src={pointer} alt="" /> */}
      </h1>
      <div className="gallery">
        <Image src={fourthh} alt="" />
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All</p>
      </div>
    </div>
   </section>
   </>
  )
}
