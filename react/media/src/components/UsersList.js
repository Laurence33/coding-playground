import { useEffect } from "react";
import { useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store";
import { useThunk } from "../hooks/use-thunk";
import Skeleton from "./Skeleton";
import Button from "./Button";
import UserListItem from './UserListItem';

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

  let content = null;
  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  }
  else if (loadingUsersError) {
    content = <div>Error fetching data! {loadingUsersError.message}</div>
  } else {
    content = data.map((user) => {
      return <UserListItem key={user.id} user={user} />
    })
  }

  return <div className="p-5">
    <div className="mb-3 flex flex-row justify-between items-center m-3">
      <h1 className="m-2 text-xl">Users</h1>
      <Button
        primary
        className="cursor-pointer hover:bg-blue-400 rounded-sm"
        loading={isCreatingUser}
        onClick={handleAddUser}
      >+ Add User</Button>
      {creatingUserError && 'Error creating user...'}
    </div>
    {content}
  </div>;
}

export default UsersList;