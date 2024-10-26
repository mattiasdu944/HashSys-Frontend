'use server'

interface LoginUserResponse {
    isError: boolean,
    message: string,
}

export const loginUser = async (email: string, password: string): Promise<LoginUserResponse> => {


    return {
        isError: false,
        message: `Bienvenido usuario`,
    }
}