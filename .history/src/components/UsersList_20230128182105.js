import React, { useEffect } from 'react'
import { fetchUsers } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from './Skeleton'


function UsersList() {
  const dispatch = useDispatch()
  const { isLoading, data, error } = useSelector(state => state.users)


  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])


  if (isLoading) {
    return <Skeleton times={10} />
  }

  if (error) {
    return <div>Error while fetching data..</div>
  }


  return (
    <div>{data.length}</div>
  )
}

export default UsersList