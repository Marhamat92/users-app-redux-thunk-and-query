import React, { useEffect } from 'react'
import { fetchUsers, addUser } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from './Skeleton'
import Button from './Button'



function UsersList() {
  const dispatch = useDispatch()
  const { isLoading, data, error } = useSelector(state => state.users)


  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])


  if (isLoading) {
    return <Skeleton className="h-10 w-full" times={10} />
  }

  if (error) {
    return <div>Error while fetching data..</div>
  }


  const renderedUsers = data.map((user) => {
    return (
      <div>
        <div className='flex flex-row justify-between items-center mt-4' >
          <h1 className='text-2xl' >User List</h1>
          <Button>
            + Add User
          </Button>
        </div>
        <div key={user.id} className='mb-2 mt-2 border rounded'>
          <div className='flex p-2 justify-between items-center cursor-pointer' >{user.name}</div>
        </div>
      </div>
    )
  })


  return (
    <div>{renderedUsers}</div>
  )
}

export default UsersList