import { useEffect } from "react";
import { fetchUsers } from "../store";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "./Skeleton";

function UsersList() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch])

  if (isLoading) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }

  if (error) {
    return <div>Error fetching data! {error.message}</div>
  }

  return data.length;
}

export default UsersList;