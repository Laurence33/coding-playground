import axios from 'axios';
const clientId = import.meta.env.VITE_UNSPLASH_CLIENT_ID;
export const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID ' + clientId
    },
    params: {
      query: term
    }
  })
  return response.data.results;
}