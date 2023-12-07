import React from 'react'

const Footer = () => {
  return (
    <div className='footer' style={{
        background: "url(images/fon.png) no-repeat center center / cover"}} >
            <div className="footer__text">
                <h3>For questions and suggestions</h3>
                <div className="text__element">
                    <img src="./images/icone11.png"/>
                    <h4>email@shelter.com</h4>
                </div>
                <div className="text__element">
                    <img src="./images/icone12.png"/>
                    <h4>+13 674 567 75 54</h4>
                </div>
            </div>
            <div className="footer__text">
                <h3>We are waiting for your visit</h3>
                <div className="text__element">
                    <img src="./images/icone13.png"/>
                    <h4>1 Central Street, Boston (entrance from the store)</h4>
                </div>
                <div className="text__element">
                    <img src="./images/icone13.png"/>
                    <h4>18 South Park, London </h4>
                </div>
            </div>
            <img className='footerImg' src="./images/footer.png" alt="" />
        </div>
  )
}

export default Footer