import React from 'react'

const CaruselCard = ({img,text}) => {


  function click()
  {
    console.log("chiqmoqda");
  }



  return (
    <div onClick={click} className='carusel__card'>
            <img src={img}/>
            <h4>{text}</h4>
            <button>Learn more</button>
    </div>
  )
}

export default CaruselCard