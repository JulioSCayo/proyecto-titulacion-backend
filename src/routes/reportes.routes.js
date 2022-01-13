const { Router } = require('express');
const reportesController = require('../controllers/reportes.controller');
const ImagenReporte = require('../middleware/reporte-imagen');

const router = Router();

// Crear reporte
router.post('/nuevo-reporte/', reportesController.createReporte);

// Reportar problema ya existente
router.put('/replicar-reporte/:id', reportesController.replicarReporte);

// Reasignar un reporte a una nueva institucion
router.get('/reasignar-reporte/:id', reportesController.reasignarReporte);

// Enviar refuerzos a un problema
router.get('/refuerzo-reporte/:id', reportesController.refuerzoReporte);

// Listar todos los reportes de un tipo
router.get('/reportes-tipo/:tipo', reportesController.getTipoReportes);

// Listar todos los reportes en un estado
router.get('/reportes-estado/:estado', reportesController.getEstadoReportes);

// Listar todos los reportes
router.get('/reportes/', reportesController.getReportes);

// Listar todos los reportes que no esten asignados
router.get('/reportes-no-asignados/:nombreUsuario', reportesController.getReportesNoAsignados);

// buscar un reporte asignado
router.get('/reporte-asignado/:id', reportesController.getReporteAsignado);

// buscar los reportes de un usuario en específico
router.get('/reportes-usuario/:usuario', reportesController.getReportesUsuario);

// Buscar un solo reporte
router.get('/reporte/:id', reportesController.getReporte);

// Editar un reporte
router.put('/reporte/:id', reportesController.editReporte);

// Agregar imagen
router.put('/imagen-reporte/:id', ImagenReporte.single('imagenReporte'), reportesController.editImagenReporte);

// Borrar un reporte
router.delete('/reporte/:id', reportesController.deleteReporte);

// Busca los datos de los usuarios que reportaron x problema
router.post('/infoUsuariosReporte/', reportesController.infoUsuariosReporte);

module.exports = router;
