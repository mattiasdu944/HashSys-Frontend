'use server';

import { cookies } from "next/headers";
import { User } from "../interfaces/user";

export async function useSession() {
    const token = cookies().get('INV_AUTH_TOKEN');
    const user: User = JSON.parse( cookies().get('INV_AUTH_USER')?.value as string  );


    return {
        user,
        token: token!.value
    }

}