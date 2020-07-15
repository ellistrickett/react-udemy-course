import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID l6yjg8Rn3l8uDyB6KYpgRZXMcwNtI6dRxsBp_0Zp_c4'
  }
});