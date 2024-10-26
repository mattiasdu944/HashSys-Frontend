'use server'

interface CreateCategory {
    isError: boolean;
    message: string;
}

export async function createCategory(formData: FormData): Promise<CreateCategory> {


    return {
        isError: false,
        message: "Categoria creada"
    }


}
