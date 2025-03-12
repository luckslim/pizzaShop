import { Button } from "@/components/components/ui/button";
import { TableCell, TableRow } from "@/components/components/ui/table";
import { Dialog, DialogTrigger } from "@/components/components/ui/dialog";
import { ArrowRight, Search, X } from "lucide-react";
import { OrderDetails } from "./order-details";
import { OrderStatus } from "@/components/order-status";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { cancelOrder } from "@/api/cancel-order";
import { queryClient } from "@/components/lib/react-query";
import { GetOrdersResponse } from "@/api/get-orders";
import { approveOrder } from "@/api/aprove-order";
import { deliverOrder } from "@/api/deliver-order";
import { dispatchOrder } from "@/api/dispatch-order";

export interface OrderTableRowProps {
  orders: {
    orderId: string;
    createdAt: string;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    customerName: string;
    total: number;
  };
}

export function OrderTableRow({ orders }: OrderTableRowProps) {
  const [isDetailsOpen, setIsDetailOpen] = useState(false);
  function updateOrderStatusOnCache(orderId: string, status: OrderStatus) {
    const orderListCache = queryClient.getQueriesData<GetOrdersResponse>({
    queryKey: ["orders"],
    });
    orderListCache.forEach(([cacheKey, cacheData]) => {
    if (!cacheData) {
        return;
    }
    queryClient.setQueryData<GetOrdersResponse>(cacheKey, {
        ...cacheData,
        orders: cacheData.orders.map((order) => {
        if (order.orderId == orderId) {
            return { ...order, status};
        }
        return order;
        }),
    });
    });
  }
  const { mutateAsync: cancelOrderfn, isPending: isCancelingOrder } = useMutation({
    mutationFn: cancelOrder,
    async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(orderId, 'canceled')
    },
  });
  const { mutateAsync: approveOrderfn, isPending: isApprovingOrder } = useMutation({
    mutationFn: approveOrder,
    async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(orderId, 'processing')
    },
  });
     const { mutateAsync: dispatchOrderfn, isPending: isDispatchingOrder} = useMutation({
    mutationFn: dispatchOrder,
    async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(orderId, 'delivering')
    },
  });
  const { mutateAsync: deliverOrderfn, isPending: isDeliveringOrder} = useMutation({
    mutationFn: deliverOrder,
    async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(orderId, 'delivered')
    },
  });

  return (
    <>
      <TableRow>
        <TableCell>
          <Dialog open={isDetailsOpen} onOpenChange={setIsDetailOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="xs">
                <Search className="h-3 w-3" />
                <span className="sr-only">Detalhes do pedido</span>
              </Button>
            </DialogTrigger>
            <OrderDetails open={isDetailsOpen} orderId={orders.orderId} />
          </Dialog>
        </TableCell>
        <TableCell className="font-mono text-xs font-medium">
          {orders.orderId}
        </TableCell>
        <TableCell className="text-muted-foreground">
          {formatDistanceToNow(orders.createdAt, {
            locale: ptBR,
            addSuffix: true,
          })}
        </TableCell>
        <TableCell>
          <OrderStatus status={orders.status} />
        </TableCell>
        <TableCell className="font-medium">{orders.customerName}</TableCell>
        <TableCell className="font-medium">
          {(orders.total / 100).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </TableCell>
        <TableCell>
            {orders.status=='pending'&&(
                <Button 
                    onClick={()=>approveOrderfn({orderId:orders.orderId})}
                    disabled={isApprovingOrder}
                    variant="ghost" size="xs">
                    <ArrowRight className="mr-2 h-3 w-3" />
                    Aprovar
                </Button> 
            )}
            {orders.status=='processing'&&(
                <Button 
                    onClick={()=>dispatchOrderfn({orderId:orders.orderId})}
                    disabled={isDispatchingOrder}
                    variant="ghost" size="xs">
                    <ArrowRight className="mr-2 h-3 w-3" />
                    Em entrega
                </Button> 
            )}
            {orders.status=='delivering' &&(
                <Button 
                    onClick={()=>deliverOrderfn({orderId:orders.orderId})}
                    disabled={isDeliveringOrder}
                    variant="ghost" size="xs">
                    <ArrowRight className="mr-2 h-3 w-3" />
                        Entregue
                </Button> 
            )}

        </TableCell>
        <TableCell>
          <Button
            onClick={() => cancelOrderfn({ orderId: orders.orderId })}
            disabled={!["pending", "processing"].includes(orders.status) || isCancelingOrder}
            variant="ghost"
            size="xs"
          >
            <X className="mr-2 h-3 w-3" />
            Cancelar
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
}
