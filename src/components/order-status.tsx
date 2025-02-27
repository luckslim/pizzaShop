type OrderStatus =
    | "pending"
    | "canceled"
    | "processing"
    | "delivering"
    | "delivered"

interface OrderStatusProps {
    status: OrderStatus
}
const OrderStatusMap: Record<OrderStatus, string> = {
    pending: 'Pendente',
    canceled: 'Cancelado',
    delivered: 'Entregue',
    delivering: 'Em entrega',
    processing: 'Em preparo',
}
export function OrderStatus({ status }: OrderStatusProps) {
    return (
        <div className="flex items-center gap-2">
            {status == 'pending' && (
                <span className="h-2 w-2 rounded-full bg-slate-400"></span>
            )}
            {status == 'canceled' && (
                <span className="h-2 w-2 rounded-full bg-rose-500"></span>
            )}
            {status == 'delivered' && (
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            )}
            {status == 'delivering' && (
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            )}
            {status == 'processing' && (
                <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
            )}
            <span className="font-medium text-muted-foreground">{OrderStatusMap[status]}</span>
        </div>
    )
}