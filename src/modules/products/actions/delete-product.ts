'use server'

import inventoryDb from "@/config/api/inventoryDb";
import { isAxiosError } from "axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";




export async function deleteProduct( id: string ){
    
    
    const token = cookies().get('INV_AUTH_TOKEN');

    try {
        const { data } = await inventoryDb.delete(`/products/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token?.value,
            }
        });

        revalidatePath('/inventory/products');
        
        return {
            isError: false,
            message: data.message
        }

    } catch (error) {

        if( isAxiosError( error ) ){
            return {
                isError: true,
                message: error.response?.data.message ?? "Error al eliminar el producto",
            }
        }

        return {
            isError: true,
            message: "Error en el servidor, contactarse con soporte",
        }
    

    }
    

    

}