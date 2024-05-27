// import React from 'react';
// import {Image} from 'react-bootstrap';
// // import pointer from './Images/pointer.png';
// import fourthh from './Images/about-img.jpg';

// export default function Section4() {
//   return (
//     <>
//     {/* <div className="ff2"> </div>      
//     <div className="patti"> </div> */}
//     <section id="four">

//     <div className="fourthcat" id="Section4" ref={Section4}>
//       <h1>
//         {' '}
//         {/* <Image src={pointer} alt="" /> */}
//         ABOUT US
//         {/* <Image src={pointer} alt="" /> */}
//       </h1>
//       <div className="gallery">
//         <Image src={fourthh} alt="" />
//         <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All</p>
//       </div>
//     </div>
//    </section>
//    </>
//   )
// }



import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import aboutImage from './Images/about-img.jpg'; // Import your image if needed
// import './Section3.css'; // Import your custom CSS file if needed

export default function Section4() {
  return (
    <section className="about_section layout_margin-bottom lato-regular">
      <Container>
        <Row>
          <Col md={6}>
            <div className="img-box" style={{ marginBottom: '20px', textAlign: 'center', marginTop: '50px' ,color:'black'}}> {/* Align text to center */}
              <Image src={aboutImage} alt="About" fluid />
            </div>
          </Col>
          <Col md={6} style={{ display: 'flex', alignItems: 'center', marginTop: '-25%'}}> {/* Center align content */}
            <div className="detail-box lato-regular" style={{ textAlign: 'left', width: '50vw', height: '50vh', marginLeft: 'auto', marginRight: 'auto', marginTop: '45vh', padding: '20px',color:'black' }}> {/* Align text to left and increase width */}
              <div className="heading_container lato-regular">
                <h2 style={{ color: 'black', width: '100%' }}> {/* Adjusted margin top */}
                  About Us
                </h2>
              </div>
              <p style={{ color: 'black', width: '100%',marginLeft:'4px',marginTop:'10px' }}> {/* Removed marginLeft and adjusted marginBottom */}
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                are going to use a passage of Lorem Ipsum
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
