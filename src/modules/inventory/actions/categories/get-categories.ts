'use server'
import { cookies } from 'next/headers';
import inventoryDb from '@/config/api/inventoryDb';
import { CategoriesResponse } from '../..';



export async function getCategories() {

    const token = cookies().get('INV_AUTH_TOKEN');

    const { data } = await inventoryDb.get<CategoriesResponse>('/categories', {
        headers: {
            Authorization: 'Bearer ' + token!.value
        }
    })

    return data.categories;

}