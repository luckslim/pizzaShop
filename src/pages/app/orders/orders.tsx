import { Table, TableBody,TableHead, TableHeader, TableRow } from "@/components/components/ui/table";
import { OrderTableRow } from "./order-table-row";
import { OrderTableFilters } from "./order-table-filters";
import { Pagination } from "@/components/components/ui/pagination";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "@/api/get-orders";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
export function Orders() {
    const [searchParams, setSearchParams] = useSearchParams()
    const pageIndex = z.coerce 
        .number()
        .transform((page)=>page-1) 
        .parse(searchParams.get('page')??'1')

    const {data: result} = useQuery({
        queryKey:['orders', pageIndex],
        queryFn: ()=> getOrders({pageIndex}),
    })
    function handlePaginate(pageIndex:number){
        setSearchParams(prev => {
            prev.set('page', (pageIndex + 1).toString())
            return prev
        })
    }
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
                        {result && result.orders.map(order => {
                            return <OrderTableRow key={order.orderId} orders={order}/>
                        })}
                    </TableBody>
                </Table>
            </div>
            {result && (
                <Pagination onPageChange={handlePaginate} pageIndex={result.meta.pageIndex} totalCount={result.meta.totalCount} perPage={result.meta.perPage}/>
            )}
        </>

    )
}