import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/components/ui/card";
import { BarChart } from "lucide-react";
import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Line,
    Tooltip,
} from 'recharts'

import colors from "tailwindcss/colors";
const data = [
    { date:'10/12', revenue:1200 },
    { date:'12/12', revenue:800 },
    { date:'13/12', revenue:300 },
    { date:'14/12', revenue:700 },
    { date:'15/12', revenue:600 },
    { date:'16/12', revenue:900 },
    { date:'17/12', revenue:1200 },
]
export function PopularProductsChart(){
    return(
        <>
            <Card className="col-span-6">
                <CardHeader className="flex-row items-center justify-between pb-8">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-base font-medium">
                            Produtos Populares
                        </CardTitle>
                        <BarChart className="h-4 w-4 text-muted-foreground"/>
                    </div>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={240}>
                        <LineChart data={data} style={{fontSize:12}}>
                            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16}></XAxis>
                            <YAxis stroke="#888" axisLine={false} tickLine={false} width={80} tickFormatter={(value:number)=>value.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}/>
                            <CartesianGrid vertical={false} className="stroke-muted"/>
                            <Line type="linear" strokeWidth={2} dataKey="revenue" stroke={colors.yellow[400]}/>
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </>
    )
}