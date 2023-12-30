'use server'
import { cookies } from 'next/headers';
import { isAxiosError } from 'axios';
import { revalidatePath } from 'next/cache';

import inventoryDb from '@/config/api/inventoryDb';


interface CreateCategory {
    isError: boolean;
    message: string;
}

export async function createCategory(name: string, description: string): Promise<CreateCategory> {

    const token = cookies().get('INV_AUTH_TOKEN');
    try {
        const { data } = await inventoryDb.post('/categories/', { name, description }, {
            headers: {
                Authorization: 'Bearer ' + token!.value
            }
        });
        
        revalidatePath('/');

        return {
            isError: false,
            message: data.message
        }

    } catch (error) {
        if( isAxiosError(error) ){
            return {
                isError: false,
                message: error.response?.data.message ?? 'Error al guardar la categoria'
            }
        }

        return {
            isError: false,
            message: 'Error al guardar la categoria'
        }
    }

}