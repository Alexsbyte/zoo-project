import React from 'react'
import { useEffect, useState } from 'react'
import AnimalCard from '../../widgets/AnimalCard/AnimalCard'
import apiAnimal from '../../entities/apiAnimal'

export default function AnimalsPage() {
const [animals , setAnimals] = useState([])

  useEffect(()=>{
    getAnimalsAndPhoto()

  },[])

const getAnimalsAndPhoto = async ()=> {
  const {data} = await apiAnimal.getAnimalsAndPhotos()
  // const animalsPhotos =  await data.data.map(el => el.Photos)
  const animalsArr =  await data.data.map(el => ({id:el.id, title:el.title, description: el.description, photos:el.Photos}))
  setAnimals(animalsArr)

  
  
  
}
  return (<>
    <div className="container mt-5">
        <h1 className="title has-text-centered">Животные нашего зоопарка</h1>
        <div className="columns is-multiline">
          {animals.map((animal) => (
            <div key={animal.id} className="column is-half">
              <AnimalCard animal={animal}  />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
