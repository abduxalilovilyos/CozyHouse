import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CaruselCard from './CaruselCard';

const Carusel = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='carusel'>
        <h3>Our friends who are looking for a house</h3>
    <Carousel responsive={responsive}>
       <CaruselCard img={"./images/card.png"} text={"Kotline"} />
       <CaruselCard img={"./images/card2.png"} text={"Jennifer"} />
       <CaruselCard img={"./images/card3.png"} text={"Woddy"} />
       <CaruselCard img={"./images/card.png"} text={"Kotline"} />
       <CaruselCard img={"./images/card2.png"} text={"Jennifer"} />
       <CaruselCard img={"./images/card3.png"} text={"Woddy"} />
       
    </Carousel>
    </div>
  )
}

export default Carusel