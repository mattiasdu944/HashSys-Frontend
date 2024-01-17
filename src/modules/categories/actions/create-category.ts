'use server'
import { cookies } from 'next/headers';
import { isAxiosError } from 'axios';
import { revalidatePath } from 'next/cache';

import inventoryDb from '@/config/api/inventoryDb';
import { v2 as cloudinary } from 'cloudinary';


cloudinary.config( process.env.CLOUDINARY_URL ?? '' );


interface CreateCategory {
    isError: boolean;
    message: string;
}

export async function createCategory(formData: FormData ): Promise<CreateCategory> {
    const token = cookies().get('INV_AUTH_TOKEN');

    const image = formData.getAll('image');

    const category = {
        name: formData.get('name'),
        description: formData.get('description'),
    }

    const imageUrl = await uploadImage(image as File[]);

    try {
        const { data } = await inventoryDb.post('/categories', { ...category, image: imageUrl }, {
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
        if( isAxiosError(error) ){
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

async function uploadImage(images:File[]) {
    
    try {
        
        const uploadPromises = images.map( async image => {
            try {
                const buffer = await image.arrayBuffer();
                const base64Image = Buffer.from(buffer).toString('base64');
    
                return cloudinary.uploader.upload('data:image/png;base64,' + base64Image)
                    .then(response => response.secure_url );
                
            } catch (error) {
                console.log(error);
                return null;                
            }
        })
            
            
        const uploadedImages = await Promise.all( uploadPromises );
        
        return uploadedImages[0];
        

    } catch (error) {
        console.log(error);
        return null;
    }

}