
import {
    Link,
    useParams,
  } from 'react-router-dom'

import logo from '../assets/logo.png';

const PlantDetails = (props) => {

    const { plants } = props
    const { plantID } = useParams()
    const plant = plants.find(plant => plant.id == plantID)

    return(
        <div>
            <div className='plant-title-wrapper'>
                <img src={plant.image} style={{width: '300px'}} />
                <h2>{plant.nickname}</h2>
                <h4>{plant.species}</h4>
                <h4>{'H2O Frequency: is Calculating...'}</h4>
                <Link to={'/plantlist'}><span>back</span></Link>
            </div>
        </div>
    )
}

export default PlantDetails;