import React from 'react'
import { useFetchPhotosQuery } from '../store'

function PhotosList({ album }) {
  useFetchPhotosQuery();

  console.log(album, 'album')

  return (
    <div>PhotosList</div>
  )
}

export default PhotosList