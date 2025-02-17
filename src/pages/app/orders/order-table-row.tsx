import { Button } from "@/components/components/ui/button";
import { DialogHeader } from "@/components/components/ui/dialog";
import { TableCell, TableRow } from "@/components/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { ArrowRight, Search, X } from "lucide-react";

export function OrderTableRow() {
    return (
        <>
            <TableRow>
                <TableCell>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" size="xs">
                                <Search className="h-3 w-3">
                                    <span className="sr-only">Detalhes do pedido</span>
                                </Search>
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                <DialogDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
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
