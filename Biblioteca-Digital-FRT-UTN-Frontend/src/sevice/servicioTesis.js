import clienteAxios from '../api/clienteAxios';

export const obtenerTesisPorTecnicatura = async (tecnicaturaId) => {
  const respuesta = await clienteAxios.get(`/tesis?tecnicaturaId=${tecnicaturaId}`);
  return respuesta.data;
};

export const obtenerTesisPorId = async (id) => {
  const respuesta = await clienteAxios.get(`/tesis/${id}`);
  return respuesta.data;
};