'use server';

import { cookies } from "next/headers";
import { User } from "../interfaces/user";


export async function useSession() {

    return {
        user: {
            id: 1,
            name: "Administrador",
            lastname: "Apellido",
            email: "admin@correo.com",
            role: 'Administrador',
            status: 'Activo',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        token: "123123-123123"
    }

}