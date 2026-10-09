import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

export const BarraFiltrosTesis = ({ filtros, alCambiarFiltro, alLimpiar, temasDisponibles, aniosDisponibles }) => {
  return (
    <Card className="shadow-sm mb-4">
      <Card.Header className="bg-primary text-white fw-bold">
        <h5 className="mb-0">Filtrar Tesis</h5>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label><strong>Buscar por Autor</strong></Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej. Juan Pérez"
              value={filtros.autor}
              onChange={(e) => alCambiarFiltro('autor', e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label><strong>Año</strong></Form.Label>
            <Form.Select
              value={filtros.anio}
              onChange={(e) => alCambiarFiltro('anio', e.target.value)}
            >
              <option value="">Todos los años</option>
              {aniosDisponibles.map((anio) => (
                <option key={anio} value={anio}>{anio}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label><strong>Tema / Especialidad</strong></Form.Label>
            <Form.Select
              value={filtros.tema}
              onChange={(e) => alCambiarFiltro('tema', e.target.value)}
            >
              <option value="">Todos los temas</option>
              {temasDisponibles.map((tema) => (
                <option key={tema} value={tema}>{tema}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Button variant="outline-secondary" className="w-100" onClick={alLimpiar}>
            Limpiar Filtros
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};