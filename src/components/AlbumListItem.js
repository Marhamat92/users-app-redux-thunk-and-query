import React from 'react'
import { GoTrashcan } from 'react-icons/go'
import Button from './Button'
import ExpandablePanel from './ExpandablePanel'
import { useRemoveAlbumMutation } from '../store'
import PhotosList from './PhotosList'

function AlbumListItem({ album }) {

  const [removeAlbum, removeAlbumResults] = useRemoveAlbumMutation()

  console.log(removeAlbumResults, 'removeAlbumResults')

  const handleRemoveAlbum = () => {
    removeAlbum(album)
  }

  const header = <>
    <Button loading={removeAlbumResults.isLoading} onClick={handleRemoveAlbum} >
      <GoTrashcan className='text-2xl hover:text-red-500 cursor-pointer ' />
    </Button>
    <div className='flex p-2 justify-between items-center cursor-pointer' >{album.title}</div>
  </>



  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
  )
}

export default AlbumListItem