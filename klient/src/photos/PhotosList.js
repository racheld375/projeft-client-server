import { useEffect,useState} from "react"
import Axios from "axios"
import { Link } from 'react-router-dom'
import PhotosItem from './PhotosItem'

const PhotosList = () => {
const [photos,setPhotos] =useState([])

    const fechPhotos= async ()=>{
        const{data}=await Axios.get("http://localhost:7500/ContentManager/photos/")
        setPhotos(data)
    }


    useEffect(()=>{
        fechPhotos()
    },[])

    if(photos.length===0) return <h2>loading</h2>

  return <>
  <Link to="/photos/Add">add photo</Link>
  {photos.map((photo,index)=>{
    return <PhotosItem photo={photo} fechPhotos={fechPhotos}/>}
    )}
  </>
}

export default PhotosList