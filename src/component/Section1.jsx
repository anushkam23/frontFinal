// import React from 'react';
// import {Image} from 'react-bootstrap';
// import firstCatImage from './Images/hero-bg.png';

// // import firstCatImage from './Images/firssttCat.png';
// export default function Section1() {
  
//   return (
//     <>
//       {/* <Container className='upper' style={{backgroundColor:'black', height:'70px',width:'100vh'}}>
//       </Container> */}
//       <div className="ff2"></div>
//       <div className="patti"></div>
//      <section id="hello">
//         <div className="first" id="Section1" ref={Section1}>
//           <Image src={firstCatImage} alt="" />
//           <h1>
//             WE PROVIDE BEST <br /> HEALTHCARE 
//             {/* <div className="ycolor">LEARN MORE...</div> */}
//           </h1> 
//           {/* <p>WE PROVIDE BEST HEALTHCARE</p> */}
//            {/* <p> <Image src={logo} alt="" /></p>  */}
//            {/* <p className="book">BOOK YOUR <br />TABLE<span id="Now"> NOW</span> </p> */}
//         </div>
//       </section> 
//     </>
//   )
// }




import React, { useState, useEffect } from 'react';
import { Container, Carousel, CarouselItem } from 'react-bootstrap';
import firstCatImage from './Images/hero-bg.png';

const slides = [
  { id: 1, text: 'WE PROVIDE BEST HEALTHCARE', additionalText: 'WE PROVIDE BEST HEALTHCARE' },
  { id: 2, text: 'WE PROVIDE BEST FACILITIES', additionalText: 'WE PROVIDE BEST FACILITIES' },
  { id: 3, text: 'WE ARE BEST', additionalText: 'WE ARE BEST' },
];

export default function Section1() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Container fluid className="upper">
        {/* Navbar content */}
      </Container>
      <div className="ff2"></div>
      <div className="patti"></div>
      <section id="hello">
        <div className="first lato-regular" id="Section1" style={{ position: 'relative'}}>
          <img src={firstCatImage} className="d-block w-100" alt="Background" />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#000',
            }}
          >
            <Carousel 
              activeIndex={index} 
              onSelect={handleSelect} 
              controls={false} 
              indicators={false} 
              style={{ width: '100%', zIndex: 1 }}
            >
              {slides.map((slide) => (
                <CarouselItem key={slide.id}>
                  <div style={{ padding: '20px', maxWidth: '600px', marginLeft: '160px', marginTop: '50px', fontSize: '30px' }}>
                    <h1 style={{ fontWeight: 'bold' }}>{slide.text}</h1>
                    <p style={{ fontSize: '20px' }}>{slide.additionalText}</p>
                  </div>
                </CarouselItem>
              ))}
            </Carousel>
            <button
              className="carousel-control-prev"
              type="button"
              onClick={() => setIndex(index === 0 ? slides.length - 1 : index - 1)}
              style={{
                position: 'absolute',
                top: '10%',
                left: '20px',
                zIndex: 2,
                background: 'none',
                border: 'none',
                color: '#000',
                fontSize: '30px',
                cursor: 'pointer',
              }}
            >
              &#10094;
            </button>
            <button
              className="carousel-control-next"
              type="button"
              onClick={() => setIndex(index === slides.length - 1 ? 0 : index + 1)}
              style={{
                position: 'absolute',
                top: '10%',
                right: '20px',
                zIndex: 2,
                background: 'none',
                border: 'none',
                color: '#000',
                fontSize: '30px',
                cursor: 'pointer',
              }}
            >
              &#10095;
            </button>
          </div>
        </div>
      </section>
    </>
  );
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
