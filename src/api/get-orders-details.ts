import { api } from "@/components/lib/axios"

export interface GetOrdersDetailsParams{
    orderId:string
}
export interface GetOrderDetailsResponse{

        id: string;
        createdAt: Date;
        status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
        totalInCents: number;
        customer: {
            name: string;
            email: string;
            phone: string | null;
        };
        orderItems: {
            id:string
            priceInCents:number
            quantity:number
            product:{
                name:string
            }
        }[];

}
export async function getOrderDetails({orderId}:GetOrdersDetailsParams){
    const response = await api.get<GetOrderDetailsResponse>(`/orders/${orderId}`)
    return response.data 
}