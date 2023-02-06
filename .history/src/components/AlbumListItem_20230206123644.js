import React from 'react'
import { GoTrashcan } from 'react-icons/go'
import Button from './Button'
import ExpandablePanel from './ExpandablePanel'

function AlbumListItem({ album }) {

  const header = <>
    <Button>
      <GoTrashcan className='text-2xl hover:text-red-500 cursor-pointer ' />
    </Button>
    <div className='flex p-2 justify-between items-center cursor-pointer' >{album}</div>
  </>



  return (
    <ExpandablePanel key={album.id} header={album.title}>
      Photos
    </ExpandablePanel>
  )
}

export default AlbumListItem