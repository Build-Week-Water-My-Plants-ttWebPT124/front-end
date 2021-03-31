import React from 'react'

const removeByAttr = function(arr, attr, value){
    var i = arr.length;
    while(i--){
       if( arr[i] 
           && arr[i].hasOwnProperty(attr) 
           && (arguments.length > 2 && arr[i][attr] === value ) ){ 

           arr.splice(i,1);
       }
    }
    return arr;
}


const PlantsList = (props) => {

    const { plantsList, plantValues, plantUpdate, plantSubmit, removePlant } = props

    return(
        <div>
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
                        list={plantsList} />)
                })}
            </div>
        </div>
    )
}

const Plants = (props) =>{

    const { plants, list, remove } = props

    const deletePlant = (currentID) =>{
        remove(currentID)
    }

    return (
        <div>
            <h2>{plants.nickname}</h2>
            <p>Species: {plants.species}</p>
            <p>h2oFrequency: Calculating... </p>
            <a href=''>Details</a>
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