import React from 'react';
import {Image} from 'react-bootstrap';
import pointer from './Images/pointer.png';
// import pp from './Images/fff.png';
// import pp from './Images/fff.png';
// import aboutLgran from './Images/aboutLgran.png';
import cardiology from './Images/s1.png'
import diagnosis from './Images/s2.png'
import surgery from './Images/s3.png'

// bg-img img-fluid

export default function Section2() {
  return (
    <>
    {/* <div className="ff2"> </div>      
    <div className="patti"></div> */}
    <div className="secondCat" id="Section2" ref={Section2}>
    <div className="textmy mx-auto">
      <h4 className="text-uppercase">
        OUR DEPARTMENTS
        {/* <Image className='bg-img' src={pointer} alt="" /> About{' '} */}
        <span id="aboutt">
          {/* <Image src={aboutLgran} alt="" /> */}
        </span>{' '}
        {/* <Image src={pointer} alt="" /> */}
      </h4>
      <p className="text-start mx-auto p-4 text-wrap fs-5">
      <span id="essay">
    
      </span>
      </p>
      <span id="base">
        {/* Visit OR Book <span id="visit" className="text-uppercase"> Now </span> */}
      </span>
      <div className="dept">
      <div class="box">
              <div class="img-box1">
              <Image src={cardiology} alt="" />
                {/* <img src="images/s1.png" alt=""> */}
              </div>
              <div class="detail-box">
                <h5>
                  Cardiology
                </h5>

                <p>
                  fact that a reader will be distracted by the readable page when looking at its layout.
                </p>
              </div>
            </div>


            <div class="box">
              <div class="img-box1">
              <Image src={diagnosis} alt="" />
                {/* <img src="images/s1.png" alt=""> */}
              </div>
              <div class="detail-box">
                <h5>
                  Diagnosis
                </h5>

                <p>
                  fact that a reader will be distracted by the readable page when looking at its layout.
                </p>
              </div>
            </div>

            <div class="box">
              <div class="img-box1">
              <Image src={surgery} alt="" />
                {/* <img src="images/s1.png" alt=""> */}
              </div>
              <div class="detail-box">
                <h5>
                  Surgery
                </h5>

                <p>
                  fact that a reader will be distracted by the readable page when looking at its layout.
                </p>
              </div>
            </div>

            <div class="box">
              <div class="img-box1">
              <Image src={diagnosis} alt="" />
                {/* <img src="images/s1.png" alt=""> */}
              </div>
              <div class="detail-box">
                <h5>
                  First-Aid
                </h5>

                <p>
                  fact that a reader will be distracted by the readable page when looking at its layout.
                </p>
              </div>
            </div>


          </div>
      </div>
    </div>

  </>
  )
}