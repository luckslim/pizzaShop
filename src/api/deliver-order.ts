import { api } from "@/components/lib/axios"

export interface DevilerOrderParams {
    orderId: string
}
export async function devilerOrder({orderId}: DevilerOrderParams){
    await api.patch(`/orders/${orderId}/deviler`)
}