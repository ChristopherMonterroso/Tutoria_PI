import React, { useState, useEffect } from 'react';
import './styles/AdminDashboard.css'; // Archivo de estilos CSS

function AdminDashboard() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const response = await fetch('http://localhost:3000/usuarios');
      if (response.ok) {
        const data = await response.json();
        setUsuarios(data);
      } else {
        console.error('Error al obtener usuarios:', response.statusText);
      }
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  };

  const handleDelete = async (carnet) => {
    try {
      const response = await fetch(`http://localhost:3000/usuarios/${carnet}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setUsuarios(usuarios.filter(usuario => usuario.carnet !== carnet));
        alert('Usuario eliminado exitosamente');
      } else {
        console.error('Error al eliminar usuario:', response.statusText);
      }
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };

  const handleEdit = (id) => {
    // Lógica para editar el usuario con el ID especificado
    console.log(`Editar usuario con ID ${id}`);
  };

  return (
    <section>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Carné</th>
            <th>Contraseña</th>
            <th>Eliminar</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.carnet}>
              <td>{usuario.nombre}</td>
              <td>{usuario.carnet}</td>
              <td>{usuario.contraseña}</td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(usuario.carnet)}>Eliminar</button>
              </td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(usuario.carnet)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default AdminDashboard;


