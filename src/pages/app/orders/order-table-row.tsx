import { Button } from "@/components/components/ui/button";
import { TableCell, TableRow } from "@/components/components/ui/table";
import { 
    Dialog,
    DialogTrigger
} from "@/components/components/ui/dialog";
import { ArrowRight, Search, X } from "lucide-react";
import { OrderDetails } from "./order-details";

export function OrderTableRow() {
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
                <TableCell className="font-mono text-xs font-medium">8as9fy8f09yfsddsf</TableCell>
                <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
                <TableCell>
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                        <span className="font-medium text-muted-foreground">Pendente</span>
                    </div>
                </TableCell>
                <TableCell className="font-medium">lucas soares</TableCell>
                <TableCell className="font-medium">R$ 149,98</TableCell>
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
