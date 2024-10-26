'use server';

import { cookies } from "next/headers";
import { User } from "../interfaces/user";


export const getSession = async (): Promise<{user: User, token: string}> => {

    return {
        user: {
            id: '1',
            name: "Administrador",
            lastname: "Apellido",
            email: "admin@correo.com",
            role: 'Administrador',
            status: 'Activo',
            createdAt: JSON.stringify(new Date()),
            updatedAt: JSON.stringify(new Date()),
        },
        token: "123123-123123"
    }

}