import React from 'react'

const HelpCard = ({img,text}) => {
  return (
    <div className='help__card'>
        <img src={img}/>
        <h4>{text}</h4>
    </div>
  )
}

export default HelpCard