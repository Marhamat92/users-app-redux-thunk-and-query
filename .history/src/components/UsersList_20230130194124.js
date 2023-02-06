import React, { useEffect, useState } from 'react'
import { fetchUsers, addUser } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from './Skeleton'
import Button from './Button'



function UsersList() {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => {
    return state.users;
  });
  const [isLoadingUsers, setIsLoadingUsers] = useState(false)
  const [loadingUsersError, setLoadingUsersError] = useState(null)
  // we deleted isLoading and error from destructring because we will use useState instead of isLoading and error which are isLoadingUsers and loadingUsersError
  const [isAddingUser, setIsAddingUser] = useState(false)
  const [addingUserError, setAddingUserError] = useState(null)


  useEffect(() => {
    setIsLoadingUsers(true)
    dispatch(fetchUsers())
      .unwrap()
      .then(() => {
        setIsLoadingUsers(false)
      })
      .catch((error) => {
        setLoadingUsersError(error)

      })
      .finally(() => {
        setIsLoadingUsers(false)
      })
    //when we console log dispatch we see unwrap, so we ca use t to create a promise and then we can use then and catch to show the loading or error accordingly
  }, [dispatch])

  const handleAddUser = () => {
    setIsAddingUser(true)
    dispatch(addUser())
      .unwrap()
      .then(() => {
        setIsAddingUser(false)
      })
      .catch((error) => {
        setAddingUserError(error)
      })
      .finally(() => {
        setIsAddingUser(false)
      }
      )
  }


  if (isLoadingUsers) {
    return <Skeleton className="h-10 w-full" times={10} />
  }

  if (loadingUsersError) {
    return <div>Error while fetching data..</div>
  }


  const renderedUsers = data.map((user) => {
    if (user !== undefined) {
      return (
        <div>
          <div key={user.id} className='mb-2 mt-2 border rounded'>
            <div className='flex p-2 justify-between items-center cursor-pointer' >{user.name}</div>
          </div>
        </div>
      )
    }

  })


  return (

    <div>
      <div className='flex flex-row justify-between items-center mt-4' >
        <h1 className='text-2xl font-bold' >User List</h1>
        {isAddingUser ? "Adding User...."
          : <Button onClick={handleAddUser} success>
            + Add User
          </Button>}
        {addingUserError && <div>Error while adding user</div>}
      </div>
      {renderedUsers}
    </div>
  )
}

export default UsersList