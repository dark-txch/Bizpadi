import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bizpadi-api-dnawfrduhjddgbfw.eastus2-01.azurewebsites.net/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
