import axios from 'axios';

const KEY = 'AIzaSyAer_EMxuPR1prNFmvHH5TPrno1FsiXmv8';

export default axios.create ({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});