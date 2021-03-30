import React from 'react'




const PlantsList = (props) => {

    const { plantsList, plantValues, plantUpdate, plantSubmit } = props

    return(
        <div>
            <PlantsForm 
                values={plantValues}
                update={plantUpdate}
                submit={plantSubmit}
            />
            <div>
                {plantsList.map((data, i)=>{
                    <Plants key={i} plants ={data} />
                })}
            </div>
        </div>
    )
}

const Plants = (props) =>{

    const { plants } = props

    return (
        <div>
            <h2>{plants.name}</h2>
            <p>Email: {plants.email}</p>
            <p>Role: {plants.role}</p>
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