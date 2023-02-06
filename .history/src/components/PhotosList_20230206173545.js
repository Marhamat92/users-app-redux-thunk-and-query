import React from 'react'
import { useFetchPhotosQuery } from '../store'

function PhotosList({ album }) {
  useFetchPhotosQuery(album.id);



  return (
    <div>PhotosList</div>
  )
}

export default PhotosList