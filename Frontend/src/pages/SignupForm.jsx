import React, { useState } from "react";
import "./styles/LoginForm.css";
import { Link } from "react-router-dom";

function SignUpForm() {
  const [carnet, setCarnet] = useState("");
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch("http://localhost:3000/crear-usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "nombre": nombre,
          "numeroCarnet": carnet,
          "contraseña": contraseña,
        }),
      });

      if (response.ok) {
        // El usuario se creó exitosamente
        alert("Usuario creado exitosamente");
        console.log(response.statusText);
      } else {
        // Ocurrió un error al crear el usuario
        console.error("Error al crear el usuario");
      }
    } catch (error) {
      console.error("Error al enviar la solicitud al servidor", error);
    }
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2 className="active">Sign up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="carnet"
            className="fadeIn first"
            name="carnet"
            placeholder="Carnet"
            value={carnet}
            onChange={(e) => setCarnet(e.target.value)}
          />
          <input
            type="text"
            id="nombre"
            className="fadeIn second"
            name="nombre"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            id="contraseña"
            className="fadeIn third"
            name="contraseña"
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
          <input type="submit" className="fadeIn fourth" value="Registrarse" />
        </form>
        <div id="formFooter">
        
          <Link to="/login" className="underlineHover">
            Iniciar Sesión
          </Link>
        
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
