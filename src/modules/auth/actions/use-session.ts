'use server';

import { cookies } from "next/headers";
import { User } from "../interfaces/user";

export async function useSession() {
    const token = cookies().get('INV_AUTH_TOKEN')!.value;
    const user: User = JSON.parse( cookies().get('INV_AUTH_USER')!.value  );


    return {
        user,
        token
    }

}