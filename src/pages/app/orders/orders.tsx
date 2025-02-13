import { Button } from "@/components/components/ui/button";
import { Input } from "@/components/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/components/ui/table";
import { ArrowRight, Ghost, Search, X } from "lucide-react";

export function Orders() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
            </div>
            <div className="space-y-2.5">
                <form className="flex items-center gap-2">
                    <span className="text-sm font-semibold">Filtros:</span>
                    <Input placeholder="Nome do Cliente" className="h-8 w-[320px]"></Input>
                </form>
            </div>
            <div className="border rounded-md">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[64px]"></TableHead>
                            <TableHead className="w-[148px]">Identificador</TableHead>
                            <TableHead className="w-[180px]">Realizado há</TableHead>
                            <TableHead className="w-[148px]">Status</TableHead>
                            <TableHead>Cliente</TableHead>
                            <TableHead className="w-[148px]">Total do Pedido</TableHead>
                            <TableHead className="w-[164px]"></TableHead>
                            <TableHead className="w-[132px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Button variant="outline" size="xs">
                                    <Search className="h-3 w-3">
                                        <span className="sr-only">Detalhes do pedido</span>
                                    </Search>
                                </Button>
                            </TableCell>
                            <TableCell className="font-mono text-xs font-medium">8as9fy8f09yfsddsf</TableCell>
                            <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                                    <span className="font-medium text-muted-foreground">Pendente</span>
                                </div>
                            </TableCell>
                            <TableCell className="font-medium">
                                lucas soares
                            </TableCell>
                            <TableCell className="font-medium">
                                    R$ 149,98
                            </TableCell>
                            <TableCell>
                                <Button variant="ghost" size="xs">
                                    <ArrowRight className="mr-2 h-3 w-3"/>
                                    Aprovar
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="ghost" size="xs">
                                    <X className="mr-2 h-3 w-3"/>
                                    Cancelar
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        </>

    )
}