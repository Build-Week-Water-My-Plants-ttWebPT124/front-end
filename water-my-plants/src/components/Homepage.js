import React from 'react'
import banner from '../assets/Banner.jfif'
import feature1 from '../assets/feature-1.jpg';
import feature2 from '../assets/feature-2.png';



const Homepage = ()=>{


    return(
        <div className='homepage-container' style={{width: '65%'}}>
            <header>
                <img src={banner} className='banner' alt='banner' style={{width: '100%', height: 'auto'}}/>
                <button>Get started</button>
            </header>
            <br />
           
            <div>
                <div className='features'>
                    <img src= {feature1} className='feature' alt='feature' style={{width: '100%', height: 'auto'}}/>
                    <h3>Feature 1</h3>
                    <p>Feature 1 description will go here.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Lectus arcu bibendum at varius vel. At in tellus integer feugiat scelerisque varius morbi. Ultrices in iaculis nunc sed augue lacus viverra.</p>
                </div>
                <br />
                <div className='features'>
                    <img src={feature2} className='feature' alt='feature' style={{width: '100%', height: 'auto'}}/>
                    <h3>Feature 2</h3>
                    <p>Feauture 2 description wil go here.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Lectus arcu bibendum at varius vel. At in tellus integer feugiat scelerisque varius morbi. Ultrices in iaculis nunc sed augue lacus viverra.</p>
                </div>
            </div>
        </div>
    )
}

export default Homepage;