// Le agregamos un "salvavidas" por si la variable de entorno no está configurada
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const loginService = async (numeroEmpleado, password) => {
    const response = await fetch(`${API_URL}/api/sesiones/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // CORRECCIÓN 1: El backend necesita que se llame 'numero_empleado', no 'nombre'
        body: JSON.stringify({ numero_empleado: numeroEmpleado, password })   
    });

    const data = await response.json();

    if (!response.ok) {
        // CORRECCIÓN 2: Simulamos la estructura de error que espera tu Login.js
        const error = new Error(data.message || 'Error en el login');
        error.response = { data: { message: data.message || 'Credenciales incorrectas' } };
        throw error;
    }
    
    // CORRECCIÓN 3: Tu Login.js extrae los datos usando "respuesta.data"
    // Dependiendo de cómo lo devuelva tu backend, nos aseguramos de que no falle
    return { data: data.data ? data.data : data };
};