import { Table, TableBody,TableHead, TableHeader, TableRow } from "@/components/components/ui/table";
import { OrderTableRow } from "./order-table-row";
import { OrderTableFilters } from "./order-table-filters";
import { Pagination } from "@/components/components/ui/pagination";
export function Orders() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
            </div>
            <div className="space-y-2.5">
                <OrderTableFilters/>
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
                        {Array.from({ length: 10 }).map((_, i) => {
                            return (
                                <OrderTableRow key={i}/>
                            )
                        })}

                    </TableBody>
                </Table>
            </div>
            <Pagination pageIndex={0} totalCount={105} perPage={10}/>
        </>

    )
}