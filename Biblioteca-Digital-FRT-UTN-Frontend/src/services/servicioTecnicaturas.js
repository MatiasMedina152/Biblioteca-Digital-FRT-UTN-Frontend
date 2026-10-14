import { obtenerDb } from './servicioDatos';

export const obtenerTecnicaturas = async () => {
  const db = await obtenerDb();
  return db.tecnicaturas;
};

export const obtenerTecnicaturaPorId = async (id) => {
  const db = await obtenerDb();
  return db.tecnicaturas.find((t) => t.id === String(id));
};