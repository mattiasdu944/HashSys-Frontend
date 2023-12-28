'use server'
import axios from "axios";
import {  cookies } from "next/headers";

import { LoginResponse } from "..";
import inventoryDb from "@/config/api/inventoryDb"
import { revalidatePath } from "next/cache";

interface LoginUserResponse {
    isError: boolean,
    message: string,
}

export const loginUser = async (email: string, password: string): Promise<LoginUserResponse> => {
    try {
        const { data } = await inventoryDb.post<LoginResponse>('/auth/login', { email, password });
        const { user } = data;        

        cookies().set('INV_AUTH_TOKEN', data.token);
        cookies().set('INV_AUTH_USER', JSON.stringify(user));

        revalidatePath('/');

        return {
            isError: false,
            message: `Bienvenido ${user.name}`,
        }

    } catch (error) {
        if (axios.isAxiosError(error)) {
            return {
                isError: true,
                message: error.response?.data.message,
            }
        }

        return {
            isError: true,
            message: 'ERROR - Revise los logs del sistema',
        }
    }
}