'use server';
import { cookies } from "next/headers";

import { IProductsResponse } from "..";
import inventoryDb from "@/config/api/inventoryDb";


export async function getAllProducts( page: number = 1 ) {
    
    const token = cookies().get('INV_AUTH_TOKEN');

    try {
        const { data } = await inventoryDb.get<IProductsResponse>('/products', {
            headers: {
                Authorization: 'Bearer ' + token?.value,
            }
        });
    
        return data;
        
    } catch (error) {
        throw error;
    }
    
}