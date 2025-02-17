import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/components/ui/table";

export function OrderDetails() {
    return (
        <>
            <DialogContent >
                <DialogHeader>
                    <DialogTitle>Pedido: ijsf989s87afsf7</DialogTitle>
                    <DialogDescription>
                        Detalhes do Pedido
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className="text-muted-foreground">
                                    status
                                </TableCell>
                                <TableCell className="flex justify-end">
                                    <div className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                                        <span className="font-medium text-muted-foreground">Pendente</span>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="text-muted-foreground">
                                   Cliente
                                </TableCell>
                                <TableCell className="flex justify-end">
                                    Lucas Soares
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="text-muted-foreground">
                                   Telefone
                                </TableCell>
                                <TableCell className="flex justify-end">
                                    23423434234
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="text-muted-foreground">
                                   Email
                                </TableCell>
                                <TableCell className="flex justify-end">
                                    lucaslima78@hotmail.com
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="text-muted-foreground">
                                   Realizado há
                                </TableCell>
                                <TableCell className="flex justify-end">
                                    3 Minutos
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Produto</TableHead>
                                <TableHead className="text-right">QTD.</TableHead>
                                <TableHead className="text-right">Preço</TableHead>
                                <TableHead className="text-right">SubTotal</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Pizza Pepperoni Família</TableCell>
                                <TableCell className="text-right">2</TableCell>
                                <TableCell className="text-right">R$ 69,90</TableCell>
                                <TableCell className="text-right">R$ 139,80</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Pizza Pepperoni Mussarela</TableCell>
                                <TableCell className="text-right">1</TableCell>
                                <TableCell className="text-right">R$ 59,90</TableCell>
                                <TableCell className="text-right">R$ 119,80</TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={3}>Total do pedido</TableCell>
                                <TableCell className="text-right font-medium">R$ 259,60</TableCell>
                            </TableRow> 

                        </TableFooter>
                    </Table>

                </div>
            </DialogContent>
        </>
    )
}