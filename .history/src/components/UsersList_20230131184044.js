import React, { useEffect, useState } from 'react'
import { fetchUsers, addUser } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from './Skeleton'
import Button from './Button'
import { useThunk } from '../hooks/use-thunk'
import UsersListItem from './UsersListItem'



function UsersList() {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => {
    return state.users;
  });
  // const [isLoadingUsers, setIsLoadingUsers] = useState(false)  //!we removed these two lines because we are using hook useThunk
  // const [loadingUsersError, setLoadingUsersError] = useState(null)
  const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers) //!we are using useThunk hook to get the data from the server
  //! we deleted isLoading and error from destructring because we will use useState instead of isLoading and error which are isLoadingUsers and loadingUsersError
  // const [isAddingUser, setIsAddingUser] = useState(false)
  // const [addingUserError, setAddingUserError] = useState(null)
  const [doAddUser, isAddingUser, addingUserError] = useThunk(addUser) //!we are using useThunk hook to add the data to the server


  useEffect(() => {

    doFetchUsers(); //!we are using doFetchUsers instead of dispatch(fetchUsers()) because we are using useThunk hook
    //when we console log dispatch we see unwrap, so we ca use t to create a promise and then we can use then and catch to show the loading or error accordingly
  }, [doFetchUsers])

  const handleAddUser = () => {
    doAddUser()
  }

  let content;
  if (isLoadingUsers) {
    content = <Skeleton className="h-10 w-full" times={10} />
  } else if (loadingUsersError) {
    content = <div>Error while fetching data..</div>
  } else {
    content = data.map((user) => {
      return (
        <UsersListItem key={user.id} user={user} />
      )
    })
  }


  return (

    <div>
      <div className='flex flex-row justify-between items-center mt-4' >
        <h1 className='text-2xl font-bold' >User List</h1>
        <Button loading={isAddingUser} onClick={handleAddUser} success>
          + Add User
        </Button>
        {addingUserError && <div>Error while adding user</div>}
      </div>
      {content}
    </div>
  )
}

export default UsersList