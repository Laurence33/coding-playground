import { GoTrashcan } from "react-icons/go";
import { useThunk } from "../hooks/use-thunk";
import { removeUser } from "../store";
import Button from "./Button";

function UserListItem({ user }) {
  const [runRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleRemoveUser = (user) => {
    runRemoveUser(user.id);
  }

  return <div className="mb-2 border rounded">
    <div className="flex p-2 justify-between items-center cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <Button className="mr-3" loading={isLoading} onClick={() => handleRemoveUser(user)}>
          <GoTrashcan />
        </Button>
        {error && <div>Error deleting user.</div>}
        {user.name}
      </div>
    </div>
  </div>
}

export default UserListItem;