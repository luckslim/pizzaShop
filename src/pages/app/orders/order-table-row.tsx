import { Button } from "@/components/components/ui/button";
import { TableCell, TableRow } from "@/components/components/ui/table";
import { 
    Dialog,
    DialogTrigger
} from "@/components/components/ui/dialog";
import { ArrowRight, Search, X } from "lucide-react";
import { OrderDetails } from "./order-details";
import { OrderStatus } from "@/components/order-status";
import { formatDistanceToNow } from 'date-fns'
import {ptBR} from 'date-fns/locale'

export interface OrderTableRowProps{
    orders: {
        orderId: string;
        createdAt: string;
        status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
        customerName: string;
        total: number;
    };
}

export function OrderTableRow({orders}:OrderTableRowProps) {
    return (
        <>
            <TableRow>
                <TableCell>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" size="xs">
                                <Search className="h-3 w-3" />
                                <span className="sr-only">Detalhes do pedido</span>
                            </Button>
                        </DialogTrigger>
                        <OrderDetails/>

                    </Dialog>
                </TableCell>
                <TableCell className="font-mono text-xs font-medium">{orders.orderId}</TableCell>
                <TableCell className="text-muted-foreground">
                    {formatDistanceToNow(orders.createdAt,{
                        locale: ptBR,
                        addSuffix: true,
                    })}
                </TableCell>
                <TableCell>
                    <OrderStatus status={orders.status}/>
                </TableCell>
                <TableCell className="font-medium">{orders.customerName}</TableCell>
                <TableCell className="font-medium">{orders.total.toLocaleString('pt-BR', {
                    style:'currency',
                    currency:'BRL'
                })}</TableCell>
                <TableCell>
                    <Button variant="ghost" size="xs">
                        <ArrowRight className="mr-2 h-3 w-3" />
                        Aprovar
                    </Button>
                </TableCell>
                <TableCell>
                    <Button variant="ghost" size="xs">
                        <X className="mr-2 h-3 w-3" />
                        Cancelar
                    </Button>
                </TableCell>
            </TableRow>
        </>
    );
}
