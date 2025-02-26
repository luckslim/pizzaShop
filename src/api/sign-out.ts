import { api } from "@/components/lib/axios";

export async function signOut(){
    await api.post('/sign-out')
}