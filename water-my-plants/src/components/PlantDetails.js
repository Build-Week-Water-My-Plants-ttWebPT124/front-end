import {
    Link,
    useParams,
  } from 'react-router-dom'


const PlantDetails = (props) => {

    const { plants, editValues, editUpdate, editSubmit } = props
    const { plantID } = useParams()
    const plant = plants.find(plant => plant.id == plantID)

    return(
        <div>
            <div className='plant-title-wrapper'>
                <img src={plant.image} style={{width: '300px'}} />
                <h2>{plant.nickname}</h2>
                <h4>{plant.species}</h4>
                <h4>{`H2O Frequency: is ${plant.h2oFrequency}`}</h4>
                <span>Edit</span>
                <Link to={'/plantlist'}><span>Back</span></Link>
            </div>
            <div>
                <PlantsEditDetails 
                    plants ={plant}
                    values={editValues} 
                    update={editUpdate} 
                    edit={editSubmit} 
                    //disabled={disabled}
                    // errors={formErrors}  
               />
            </div>
        </div>
    )
}

const PlantsEditDetails = (props)=>{

    const {plants, values, update, edit } = props

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
      }

    const plantEdit = (evt, currentID) => {
        evt.preventDefault();
        edit(currentID)
  }
    return(
        <form className='form container' onSubmit={(e) =>plantEdit(e, plants.id)}>
                <div>
                    <label> Nickname:
                        <input 
                            type='text' 
                            value={values.nickname} 
                            placeholder='Name' 
                            name='nickname' 
                            maxLength='15' 
                            onChange={onChange} 
                        />

                    </label>
                    <label> Species:
                        <input 
                            type='text' 
                            value={values.species} 
                            placeholder='Species' 
                            name='species' 
                            onChange={onChange} 
                        />  
                    </label>
                    <div className='submit'>
                        <button > Save Changes</button>
                    </div>
                </div>
            </form>
    )
}

export default PlantDetails;