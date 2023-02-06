import React from 'react'
import { useFetchAlbumsQuery } from '../store';

function AlbumsList({ user }) {
  return (
    <div>
      {`Albums for ${user.name}`}
    </div>
  )
}

export default AlbumsList