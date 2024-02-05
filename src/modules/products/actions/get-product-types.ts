'use server'
import inventoryDb from "@/config/api/inventoryDb";
import { cookies } from "next/headers";
import { IProductTypesResponse } from "../interfaces/product-types-response";


export async function getAllProductTypes() {

    const token = cookies().get('INV_AUTH_TOKEN');
    
    try {
        const { data } = await inventoryDb.get<IProductTypesResponse>('/product/types', {
            headers: {
                Authorization: 'Bearer ' + token?.value
            }
        }) 
    
        return data.productTypes;
        
    } catch (error) {
        throw error;
    }
}