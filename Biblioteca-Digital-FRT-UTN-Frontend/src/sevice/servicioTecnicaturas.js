import clienteAxios from '../api/clienteAxios';

export const obtenerTecnicaturas = async () => {
  const respuesta = await clienteAxios.get('/tecnicaturas');
  return respuesta.data;
};

export const obtenerTecnicaturaPorId = async (id) => {
  const respuesta = await clienteAxios.get(`/tecnicaturas/${id}`);
  return respuesta.data;
};