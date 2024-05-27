// import React from 'react';
// import doc1 from './Images/d1.jpg';
// import {Row,Col,Container,Image} from 'react-bootstrap';

// export default function Section6() {
//   return (
//     <div> 
//          {/* <div className="ff2"> </div>      
//     <div className="patti"> </div> */}
//   <div className="sixthcat" id="Section6" ref={Section6} style={{height: '100px', width: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', margin:"50px", alignItems:"center" }}>
//     <h2>OUR DOCTORS</h2>
//    </div>
// <div className="containerdept">
//   <div className="doc1">
//   <div class="img-box">
//   <Image src={doc1} alt="" />
//     </div>
//     <p>ELINA JOSH</p> 
//   </div>
//   <div className="doc1">
//   <div class="img-box">
//   <Image src={doc1} alt="" />
//     </div>
//     <p>ELINA JOSH</p> 
//   </div>
//   <div className="doc1">
//   <div class="img-box">
//   <Image src={doc1} alt="" />
//     </div>
//     <p>ELINA JOSH</p> 
//   </div>
// </div>
//        <div className="nextText" style={{ textAlign: 'center', color: '#fff', height: '50%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', backgroundColor: 'black', padding: '0', margin: '0' }}>
//          {/* <p>OUR DOCTORS</p> */}
//          {/* <h1 style={{ color: '#f5b236', fontSize: '150px', marginBottom: '-10%' }}>“</h1> */}
//          {/* <p style={{ marginTop: '100px', marginBottom: '100px' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p> */}
//          {/* <div className="ycolor"> */}
//            {/* <h2>LINDA STEWARD</h2> */}
//          {/* </div> */}
         
// </div>
//  </div> 
//   )
// }





import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import doctor1 from './Images/d1.jpg';
import doctor2 from './Images/d2.jpg';
import doctor3 from './Images/d3.jpg';

export default function Section6() {
  return (
    <section className="doctor_section layout_padding lato-regular">
      <Container>
        <div className="heading_container heading_center lato-regular">
          <h2>Our Doctors</h2>
         
        </div>
        <Row>
          <Col sm={6} lg={4} className="mx-auto">
            <div className="box">
              <div className="img-box">
                <img src={doctor1} alt="Doctor" />
              </div>
              <div className="detail-box">
              
                <h5>Elina Josh</h5>
                <h6>Doctor</h6>
              </div>
            </div>
          </Col>
          <Col sm={6} lg={4} className="mx-auto">
            <div className="box">
              <div className="img-box">
                <img src={doctor2} alt="Doctor" />
              </div>
              <div className="detail-box">
              
                <h5>Adam View</h5>
                <h6>Doctor</h6>
              </div>
            </div>
          </Col>
          <Col sm={6} lg={4} className="mx-auto">
            <div className="box">
              <div className="img-box">
                <img src={doctor3} alt="Doctor" />
              </div>
              <div className="detail-box">
          
                <h5>Mia Mike</h5>
                <h6>Doctor</h6>
              </div>
            </div>
          </Col>
        </Row>
      
      </Container>
    </section>
  );
}
