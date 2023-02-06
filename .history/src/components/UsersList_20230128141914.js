import React, { useEffect } from 'react'
import { fetchUsers } from '../store'
import { useDispatch, useSelector } from 'react-redux'


function UsersList() {
  const dispatch = useDispatch()
  const { isLoading, data, error } = useSelector(state => state.users)


  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])


  return (
    <div>UsersList</div>
  )
}

export default UsersList