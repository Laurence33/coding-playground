import { useEffect } from "react";
import { fetchUsers } from "../store";
import { useDispatch } from "react-redux";

function UsersList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch])

  return 'users list'
}

export default UsersList;