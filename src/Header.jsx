
import React, {useState}  from 'react'

const Header = () => {
  return (
    <div className='header' style={{
        background: "url(images/fon.png) no-repeat center center / cover"
    }}>
        <div className="navbar">
            <div className="logo">
                <h1>Cozy House</h1>
                <h5>Shelter for pets in Boston</h5>
            </div>
            <input type="checkbox" name="check" id="check"/>
            <label for="check" >
            <i class="fa-solid fa-bars" id='btn' ></i>
            <i class="fa-solid fa-xmark" id='cancel'></i>
            </label>
                <ul>
                    <li><a href="./About.jsx">About the shelter</a></li>
                    <li><a href="#">Our pets</a></li>
                    <li><a href="#">Help the shetter</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
        </div>

        <div className="header__contener">
            <div className="header__text">
                <h1>Not only people need a house</h1>
                <p>We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!</p>
                <button>Make a friend</button>          
            </div>
            <img src="./images/dog.png" />
        </div>


    </div>
  )
}

export default Header