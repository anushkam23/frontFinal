import React from 'react';
import {Image} from 'react-bootstrap';
import firstCatImage from './Images/hero-bg.png';

// import firstCatImage from './Images/firssttCat.png';
export default function Section1() {
  
  return (
    <>
      {/* <Container className='upper' style={{backgroundColor:'black', height:'70px',width:'100vh'}}>
      </Container> */}
      <div className="ff2"></div>
      <div className="patti"></div>
     <section id="hello">
        <div className="first" id="Section1" ref={Section1}>
          <Image src={firstCatImage} alt="" />
          <h1>
            WE PROVIDE BEST <br /> HEALTHCARE 
            {/* <div className="ycolor">LEARN MORE...</div> */}
          </h1> 
          {/* <p>WE PROVIDE BEST HEALTHCARE</p> */}
           {/* <p> <Image src={logo} alt="" /></p>  */}
           {/* <p className="book">BOOK YOUR <br />TABLE<span id="Now"> NOW</span> </p> */}
        </div>
      </section> 
    </>
  )
}


// import React from 'react';
// import { Image } from 'react-bootstrap';
// import firstCatImage from './Images/firstbelow.png';

// export default function Section1() {
//   return (
//     <>


//       {/* Add padding to the content below the fixed navbar to prevent it from being covered by the navbar */}
//       <div className="content" style={{ paddingTop: '70px' }}>
//         <div className="ff2"></div>
//         <div className="patti"></div>
//         <section id="hello">
//           <div className="first" id="Section1">
//             <Image src={firstCatImage} alt="" />
//             <h1>
//               START YOUR MEAL WITH <br /> OUR EXCLUSIVE MENU
//               <div className="ycolor">LEARN MORE...</div>
//             </h1>
//             <p className="book">
//               BOOK YOUR <br />TABLE<span id="Now"> NOW</span>
//             </p>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }
