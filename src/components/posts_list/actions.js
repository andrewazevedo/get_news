import axios from 'axios';
import { FETCH_POSTS, ENDPOINT, API_KEY } from './constants';

export const fetchPosts = () => {
  axios.get(`${ENDPOINT}?source=techcrunch&sortBy=latest&apiKey=${API_KEY}`)
    .then(resp => {
      console.log(resp);
      return {
        type: FETCH_POSTS,
        payload: resp.data.articles
      }
    }).catch(err => {
      console.log(err);
    });
}
