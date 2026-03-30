const API_URL = import.meta.env.VITE_API_URL;

export const loginService = async (nombre, password) => {
    const response = await fetch(`${API_URL}/api/sesiones/login`, {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify({ nombre, password })   
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error (data.message || response.statusText)
    }
    return data;

};