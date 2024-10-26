'use server'
import { cookies } from "next/headers";
import { isAxiosError } from "axios";

import inventoryDb from "@/config/api/inventoryDb"
import { revalidatePath } from "next/cache";


export async function deleteCategory(id: number) {
    
    return {
        isError: false,
        message: "Categoria eliminada"
    }
    
}