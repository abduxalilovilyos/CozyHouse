import React from 'react'
import HelpCard from './HelpCard'

const Help = () => {
  return (
    <div className='help'>
        <h3>How you can help our shelter</h3>
        <div className="HelpPrimeCard">
        <HelpCard img={"./images/icone.png"} text={"Pet food"} />
        <HelpCard img={"./images/icone2.png"} text={"Transportation"} />
        <HelpCard img={"./images/icone3.png"} text={"Toys"} />
        <HelpCard img={"./images/icone4.png"} text={"Boels and cups"} />
        <HelpCard img={"./images/icone5.png"} text={"Shampoons"} />
        <HelpCard img={"./images/icone6.png"} text={"Vitamins"} />
        <HelpCard img={"./images/icone7.png"} text={"Medicines"} />
        <HelpCard img={"./images/icone8.png"} text={"Collars/leashes"} />
        <HelpCard img={"./images/icone9.png"} text={"Sleeping area"} />
    
        </div>
    </div>
  )
}

export default Help