import { Card, CardContent, CardHeader, CardTitle } from "@/components/components/ui/card";
import { Utensils } from "lucide-react";

export function DayOrdersAmountCard() {
    return (
        <>
            <Card>
                <CardHeader className="flex-row items-center justify-between pb-2">
                    <CardTitle className="flex-row items-center justify-between space-y-8 pb-2">
                        Pedidos no dia
                    </CardTitle>
                    <Utensils className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="space-y-1">
                    <span className="text-2xl font-bold trancking-tight">
                        12 Pedidos
                    </span>
                    <p className="text-xs text-muted-foreground">
                        <span className="text-rose-500 dark:text-rose-400">-4%</span> em relação a ontem
                    </p>
                </CardContent>
            </Card>
        </>
    )
}