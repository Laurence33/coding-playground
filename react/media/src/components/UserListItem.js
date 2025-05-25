import { GoTrashcan } from "react-icons/go";
import { useThunk } from "../hooks/use-thunk";
import { removeUser } from "../store";
import Button from "./Button";
import { Fragment } from "react";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

function UserListItem({ user }) {
  const [runRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleRemoveUser = (user) => {
    runRemoveUser(user.id);
  }

  const header = <Fragment>
    <Button className="mr-3" loading={isLoading} onClick={() => handleRemoveUser(user)}>
      <GoTrashcan />
    </Button>
    {error && <div>Error deleting user.</div>}
    {user.name}
  </Fragment>

  return <ExpandablePanel header={header} >
    <AlbumsList user={user} />
  </ExpandablePanel>;
}

export default UserListItem;