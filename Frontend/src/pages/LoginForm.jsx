import React, { useState } from "react";
import "./styles/LoginForm.css";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const [carnet, setCarnet] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validar si el usuario es administrador
    if (carnet === "admin" && contraseña === "admin") {
      navigate("/admin");
      return;
    }

    // Simular una solicitud al backend para validar el usuario
    try {
      const response = await fetch("http://localhost:3000/validar-usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ numeroCarnet: carnet, contraseña: contraseña }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.mensaje === "Usuario valido") {
          alert("¡Bienvenido!");
          // Aquí puedes redirigir al usuario a otra página si es necesario
        } else {
          alert("¡Usuario o contraseña incorrectos!");
        }
      } else {
        throw new Error("Error al validar usuario");
      }
    } catch (error) {
      console.error("Error al validar usuario:", error);
      alert("Ocurrió un error al validar el usuario");
    }
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2 className="active">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="carnet"
            className="fadeIn second"
            name="carnet"
            placeholder="Carnet"
            value={carnet}
            onChange={(e) => setCarnet(e.target.value)}
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
          <input
            type="submit"
            className="fadeIn fourth"
            value="Iniciar sesión"
          />
        </form>
        <div id="formFooter">
          <Link to="/signup" className="underlineHover">
            Registrarse
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
