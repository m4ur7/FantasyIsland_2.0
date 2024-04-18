import React, { useState } from "react";
import axios from "axios";

const NewProjectForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    link: "",
    image: null, // Para almacenar la imagen seleccionada
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Crear el objeto de proyecto con la imagen
      const projectData = {
        name: formData.name,
        description: formData.description,
        link: formData.link,
        image: formData.image,
      };

      // Enviar el objeto de proyecto al servidor para su almacenamiento en la base de datos
      await axios.post("/api/projects", projectData);

      // Actualizar la lista de proyectos u otras acciones necesarias
      // después de que se haya creado el nuevo proyecto
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Otros campos del formulario */}
      <input
        type="file"
        name="image"
        onChange={handleImageChange}
        accept="image/*"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewProjectForm;
