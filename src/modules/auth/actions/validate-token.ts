"use server"
import { cookies } from "next/headers";
import inventoryDb from "@/config/api/inventoryDb";
import { ValidateToken } from "../interfaces/validate-token";




export async function validateToken(){
    const token = cookies().get('INV_AUTH_TOKEN');
    
    if( !token?.value ){
        return false;
    }

    const { data } = await inventoryDb.get<ValidateToken>('/auth/user', {
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token.value
        }
    })


    if( !data ){

        cookies().delete('INV_AUTH_TOKEN');
        cookies().delete('INV_AUTH_USER');
    
        
        return false;
    }

    return token.value;
}