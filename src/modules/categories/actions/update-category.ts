'use server'
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

import { isAxiosError } from 'axios';
import { v2 as cloudinary } from 'cloudinary';

import inventoryDb from '@/config/api/inventoryDb';


cloudinary.config(process.env.CLOUDINARY_URL ?? '');

export async function updateCategory(formData: FormData) {

    const token = cookies().get('INV_AUTH_TOKEN');

    const image = formData.getAll('image');


    const id = formData.get('id');

    const category = {
        name: formData.get('name'),
        description: formData.get('description'),
    }

    try {
        if (image[0] !== 'undefined' ) {

            const imageUrl = await uploadImage(image as File[]);

            const { data } = await inventoryDb.put(`/categories/${ id }`, { ...category, image: imageUrl }, {
                headers: {
                    Authorization: 'Bearer ' + token!.value
                }
            });

            revalidatePath('/');

            return {
                isError: false,
                message: data.message
            }
        }

        const { data } = await inventoryDb.put(`/categories/${ id }`, { ...category }, {
            headers: {
                Authorization: 'Bearer ' + token!.value
            }
        });


        revalidatePath('/');

        return {
            isError: false,
            message: data.message
        }

    } catch (error) {
        if (isAxiosError(error)) {
            return {
                isError: true,
                message: error.response?.data.message ?? 'Error al guardar la categoria'
            }
        }

        return {
            isError: true,
            message: 'Error al guardar la categoria'
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

        return uploadedImages[0];


    } catch (error) {
        console.log(error);
        return null;
    }

}