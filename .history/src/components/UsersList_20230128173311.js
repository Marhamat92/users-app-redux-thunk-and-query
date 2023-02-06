import React, { useEffect } from 'react'
import { fetchUsers } from '../store'
import { useDispatch, useSelector } from 'react-redux'


function UsersList() {
  const dispatch = useDispatch()
  const { isLoading, data, error } = useSelector(state => state.users)


  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])


  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error while fetching data..</div>
  }


  return (
    <div>{data[0].name}</div>
  )
}

export default UsersList