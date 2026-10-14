import axios from 'axios';

export const obtenerDb = async () => {
  const respuesta = await axios.get('/db.json');
  return respuesta.data;
};