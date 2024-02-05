"use server"
import { cookies } from 'next/headers';
import { v2 as cloudinary } from 'cloudinary';

import { ICreateProductResponse } from '..';
import inventoryDb from "@/config/api/inventoryDb";
import { isAxiosError } from 'axios';



cloudinary.config(process.env.CLOUDINARY_URL ?? '');

export async function createProduct(formData: FormData) {

    const token = cookies().get('INV_AUTH_TOKEN');

    const product = {
        name: formData.get('name'),
        description: formData.get('description'),
        code: formData.get('code'),
        price: formData.get('price'),
        exchange_rate: formData.get('exchange_rate'),
        product_type_id: formData.get('product_type_id'),
        category_id: formData.get('category_id'),
    }

    const images = formData.getAll('images');

    try {

        const { data } = await inventoryDb.post<ICreateProductResponse>('/products', product, {
            headers: {
                Authorization: 'Bearer ' + token?.value,
            }
        });

        const productDetails = data.product;

        const imagesUrl = await uploadImage(images as File[]);

        if( imagesUrl ){
            await inventoryDb.post(
            '/products/images',
            {
                images: [...imagesUrl],
                productId: productDetails.id
            }, 
            {
                headers: {
                    Authorization: 'Bearer ' + token?.value
                }
            })
        }

        return {
            isError: false,
            message: 'Se creo el producto ' + productDetails.name
        }

    } catch (error) {
        console.log(error)
        if (isAxiosError(error)) {
            return {
                isError: true,
                message: error.response?.data.message ?? 'Error al guardar el producto'
            }
        }

        return {
            isError: true,
            message: 'Error en servidor'
        }
    }

}

async function uploadImage(images: File[]) {

    try {

        const uploadPromises = images.map(async image => {
            try {
                const buffer = await image.arrayBuffer();
                const base64Image = Buffer.from(buffer).toString('base64');

                return cloudinary.uploader.upload('data:image/png;base64,' + base64Image)
                    .then(response => response.secure_url);

            } catch (error) {
                console.log(error);
                return null;
            }
        })


        const uploadedImages = await Promise.all(uploadPromises);

        return uploadedImages;


    } catch (error) {
        console.log(error);
        return null;
    }

}