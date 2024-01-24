'use server'
import { cookies } from "next/headers";
import { isAxiosError } from "axios";

import inventoryDb from "@/config/api/inventoryDb"
import { revalidatePath } from "next/cache";


export async function deleteCategory(id: number) {
    
    const token = cookies().get('INV_AUTH_TOKEN');
    
    try {
        
        const { data } = await inventoryDb.delete('/categories/' + id, {
            headers: {
                Authorization: 'Bearer ' + token?.value
            }
        })

        revalidatePath('/')

        return {
            isError: false,
            message: data.message
        }


    } catch (error) {
        
        if( isAxiosError(error) ){
            return {
                isError: true,
                message: error.response?.data.message ?? 'Error al elimiar la categoria'
            }
        }

        return {
            isError: true,
            message: 'Error desconocido al eliminar la categoria'
        }
    }
    
}