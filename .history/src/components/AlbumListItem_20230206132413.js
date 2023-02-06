import React from 'react'
import { GoTrashcan } from 'react-icons/go'
import Button from './Button'
import ExpandablePanel from './ExpandablePanel'
import { useRemoveAlbumMutation } from '../store'

function AlbumListItem({ album }) {

  const [removeAlbum, removeAlbumResults] = useRemoveAlbumMutation()

  console.log(removeAlbumResults)

  const handleRemoveAlbum = () => {
    removeAlbum(album)
  }

  const header = <>
    <Button onClick={handleRemoveAlbum} >
      <GoTrashcan className='text-2xl hover:text-red-500 cursor-pointer ' />
    </Button>
    <div className='flex p-2 justify-between items-center cursor-pointer' >{album.title}</div>
  </>



  return (
    <ExpandablePanel key={album.id} header={header}>
      Photos
    </ExpandablePanel>
  )
}

export default AlbumListItem