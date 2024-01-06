'use server';

import { cookies } from "next/headers";
import inventoryDb from "@/config/api/inventoryDb";
import { IProductsResponse } from "../..";
import Error from "next/error";

export async function   getAllProducts( page: number = 1 ) {
    
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