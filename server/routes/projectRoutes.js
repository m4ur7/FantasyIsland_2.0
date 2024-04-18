const express = require('express');
const router = express.Router();
const Project = require('../models/Project'); // Importa el modelo de proyecto

// Ruta GET para obtener todos los proyectos
router.get('/', async (req, res) => {
    try {
        // Consulta todos los proyectos en la base de datos
        const projects = await Project.find();
        // Devuelve una respuesta con los proyectos encontrados
        res.status(200).json(projects);
    } catch (error) {
        // Si hay un error, devuelve una respuesta de error
        res.status(500).json({ message: error.message });
    }
});

// Ruta GET para obtener un proyecto por su ID
router.get('/:id', async (req, res) => {
    try {
        // Busca un proyecto por su ID en la base de datos
        const project = await Project.findById(req.params.id);
        // Si no se encuentra el proyecto, devuelve una respuesta de error
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        // Devuelve una respuesta con el proyecto encontrado
        res.status(200).json(project);
    } catch (error) {
        // Si hay un error, devuelve una respuesta de error
        res.status(500).json({ message: error.message });
    }
});

// Ruta POST para crear un nuevo proyecto
router.post('/', async (req, res) => {
    try {
        // Crea un nuevo proyecto utilizando los datos del cuerpo de la solicitud
        const newProject = new Project(req.body);
        // Guarda el proyecto en la base de datos
        await newProject.save();
        // Devuelve una respuesta con el proyecto creado
        res.status(201).json(newProject);
    } catch (error) {
        // Si hay un error, devuelve una respuesta de error
        res.status(500).json({ message: error.message });
    }
});

// Ruta PUT para actualizar un proyecto por su ID
router.put('/:id', async (req, res) => {
    try {
        // Busca un proyecto por su ID y actualiza sus datos en la base de datos
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // Si no se encuentra el proyecto, devuelve una respuesta de error
        if (!updatedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        // Devuelve una respuesta con el proyecto actualizado
        res.status(200).json(updatedProject);
    } catch (error) {
        // Si hay un error, devuelve una respuesta de error
        res.status(500).json({ message: error.message });
    }
});

// Ruta DELETE para eliminar un proyecto por su ID
router.delete('/:id', async (req, res) => {
    try {
        // Busca un proyecto por su ID y lo elimina de la base de datos
        const deletedProject = await Project.findByIdAndDelete(req.params.id);
        // Si no se encuentra el proyecto, devuelve una respuesta de error
        if (!deletedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        // Devuelve una respuesta con el proyecto eliminado
        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        // Si hay un error, devuelve una respuesta de error
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
