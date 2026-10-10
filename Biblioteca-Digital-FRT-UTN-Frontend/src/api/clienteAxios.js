import axios from 'axios';

const clienteAxios = axios.create({
  baseURL: import.meta.env.VITE_URL_BASE_API || 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default clienteAxios;