import { obtenerDb } from './servicioDatos';

export const obtenerTesisPorTecnicatura = async (tecnicaturaId) => {
  const db = await obtenerDb();
  return db.tesis.filter((t) => t.tecnicaturaId === String(tecnicaturaId));
};

export const obtenerTesisPorId = async (id) => {
  const db = await obtenerDb();
  return db.tesis.find((t) => t.id === String(id));
};