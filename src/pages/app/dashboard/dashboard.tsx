import { Card, CardContent, CardHeader, CardTitle } from "@/components/components/ui/card";
import { DollarSign } from "lucide-react";
import { MonthRevenueCard } from "./month-revenue-card";
import { MonthOrdersAmountCard } from "./month-orders-amount-card";
import { DayOrdersAmountCard } from "./days-orders-amounts-card";
import { MonthCanceledOrdersAmountCard } from "./month-canceled-amount-card";
import { RevenueChart } from "./revenue-charts";

export function Dashboard(){
    return(
        <div className="felx flex-col gap 4">
            <h1 className="text-3xl font-bold trancking-tight">Dashboard</h1>
            <div className="grid grid-cols-4 gap-4 mb-4">
                <MonthRevenueCard/>
                <MonthOrdersAmountCard/>
                <DayOrdersAmountCard/>
                <MonthCanceledOrdersAmountCard/>
            </div>
            <div className="grid grid-cols-9 gap-4">
                <RevenueChart/>
            </div>
        </div>
    )
}