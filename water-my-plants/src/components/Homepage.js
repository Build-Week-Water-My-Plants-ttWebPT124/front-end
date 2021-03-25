import react from 'react'
import banner from '../assets/Banner.jfif'
import feature1 from '../assets/feature-1.jpg';
import feature2 from '../assets/feature-2.png';


const Homepage = ()=>{


    return(
        <div>
            <header>
                <img src={banner} className='banner' />
                <button>Get started</button>
            </header>
           
            <div>
                <div className='features'>
                    <img src= {feature1} className='feature' />
                    <h3>Feature 1</h3>
                    <p>Feature 1 description will go here</p>
                </div>

                <div className='features'>
                    <img src={feature2} className='feature'/>
                    <h3>Feature 2</h3>
                    <p>Feauture 2 description wil go here</p>
                </div>
            </div>
        </div>
    )
}

export default Homepage;