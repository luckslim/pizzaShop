import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import { Button } from "./button"

export interface PaginationProps{
    pageIndex: number
    totalCount: number 
    perPage:number
    onPageChange:(pageIndex:number)=> Promise<void>|void
}
export function Pagination({pageIndex, totalCount, perPage,onPageChange}:PaginationProps){
    const pages = Math.ceil(totalCount/perPage)||1
    return (
        <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
                total de {totalCount}
            </span>
            <div className="flex items-center gap-6 lg:gap-8">
                <div className="text-sm font-medium">Página {pageIndex + 1} de {pages}</div> 
                <div className="flex items-center gap-2">
                    <Button onClick={()=>onPageChange(0)} variant="outline" className="w-8 h-8 p-0">
                        <ChevronsLeft className="h-4 w-4"/>
                        <span className="sr-only">Primeira Página</span>
                    </Button>
                    <Button onClick={()=>onPageChange(pageIndex-1)} variant="outline" className="w-8 h-8 p-0">
                        <ChevronLeft className="h-4 w-4"/>
                        <span className="sr-only">Página anterior</span>
                    </Button>
                    <Button onClick={()=>onPageChange(pageIndex+1)} variant="outline" className="w-8 h-8 p-0">
                        <ChevronRight className="h-4 w-4"/>
                        <span className="sr-only">Próxima Página</span>
                    </Button>
                    <Button onClick={()=>onPageChange(pages+1)} variant="outline" className="w-8 h-8 p-0">
                        <ChevronsRight className="h-4 w-4"/>
                        <span className="sr-only">última Página</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}