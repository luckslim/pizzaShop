import { api } from "@/components/lib/axios"

export interface ResgisterRestaurantBody{
    email:string 
    restaurantName:string
    managerName:string
    phone:string
}
export async function resgisterRestaurant({
    email,
    managerName,
    restaurantName,
    phone
}:ResgisterRestaurantBody){
    await api.post('/restaurants',{
        email,
        managerName,
        restaurantName,
        phone
    })
}