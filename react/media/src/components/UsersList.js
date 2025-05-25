import { useEffect } from "react";
import { useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store";
import { useThunk } from "../hooks/use-thunk";
import Skeleton from "./Skeleton";
import Button from "./Button";

function UsersList() {
  const { data } = useSelector(state => state.users);
  const [runFetchUser, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
  const [runCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  useEffect(() => {
    runFetchUser();
  }, [runFetchUser])

  const handleAddUser = () => {
    runCreateUser();
  }

  if (isLoadingUsers) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }

  if (loadingUsersError) {
    return <div>Error fetching data! {loadingUsersError.message}</div>
  }

  const renderedUsers = data.map((user) => {
    return <div key={user.id} className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        {user.name}
      </div>
    </div>
  })
  return <div className="p-5">
    <div className="mb-3 flex flex-row justify-between m-3">
      <h1 className="m-2 text-xl">Users</h1>
      {
        isCreatingUser
          ? 'Creating User...'
          : <Button
            primary
            className="cursor-pointer hover:bg-blue-400 rounded-sm"
            onClick={handleAddUser}
          >Add User</Button>
      }
      {creatingUserError && 'Error creating user...'}
    </div>
    {renderedUsers}
  </div>;
}

export default UsersList;