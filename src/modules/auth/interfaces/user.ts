export interface User {
    id: string,
    name: string,
    lastname: string,
    email: string,
    role: 'Administrador' | 'Empleado',
    status: 'Activo' | 'Inactivo',
    createdAt: string;
    updatedAt: string;
}