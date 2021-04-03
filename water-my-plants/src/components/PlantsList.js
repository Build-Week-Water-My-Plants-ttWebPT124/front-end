import React from 'react'
import { Link } from 'react-router-dom'


const PlantsList = (props) => {

    const { plantsList, plantValues, plantUpdate, plantSubmit, removePlant } = props

    return(
        <div>
            <h1>My Plants</h1>
            <PlantsForm 
                values={plantValues}
                update={plantUpdate}
                submit={plantSubmit}
            />

            <div>
                {plantsList.map((data, i)=>{
                    return(<Plants 
                        key={i} 
                        plants ={ data } 
                        list={plantsList} 
                        remove={removePlant}
                         />)
                })}
            </div>
        </div>
    )
}

const Plants = (props) =>{

    const { plants, remove } = props

    const deletePlant = (currentID) =>{
        remove(currentID)
    }

    return (
        <div>
            <img src={plants.image} style={{width: '100px'}} alt='img'/>
            <h2>{plants.nickname}</h2>
            <p>Species: {plants.species}</p>
            <p>h2oFrequency: Calculating... </p>
            <Link to={`plant/${plants.id}`}><span>Details</span></Link>
            <button onClick={() => deletePlant(plants.id)}>Delete</button>
        </div>
    )
}

const PlantsForm = (props) => {

    const { values, update, submit } = props

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
      }

    const onSubmit = evt => {
        evt.preventDefault();
        submit()
  }

    return(
        <form className='form container' onSubmit={onSubmit}>
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
                        <button>Add Plant</button>
                    </div>
                </div>
            </form>
    )
}

export default PlantsList;