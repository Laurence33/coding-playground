import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('http://localhost:3005/users');
  // DEV ONLY!!
  await sleep(3000);
  return response.data;
});

// DEV ONLY!!
const sleep = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  })
}
export { fetchUsers };
