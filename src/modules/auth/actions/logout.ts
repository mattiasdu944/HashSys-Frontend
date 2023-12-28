'use server'
import { cookies } from "next/headers"
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import inventoryDb from "@/config/api/inventoryDb"




export async function logout() {

    const token = cookies().get('INV_AUTH_TOKEN')

    
    cookies().delete('INV_AUTH_TOKEN');
    cookies().delete('INV_AUTH_USER');


    try {
        await inventoryDb.post('/auth/logout', {}, {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + token!.value
            }
        })

        
    } catch (error) {
        console.log(error);
    }

    revalidatePath('/')
    redirect('/auth/login')
}