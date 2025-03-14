import { getMonthOrdersAmount } from "@/api/get-month-orders-amount";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";

export function MonthOrdersAmountCard() {
  const { data: monthOrdersAmount } = useQuery({
    queryFn: getMonthOrdersAmount,
    queryKey: ["metrics", "day-orders-amount"],
  });
  return (
    <>
      <Card>
        <CardHeader className="flex-row items-center justify-between pb-2">
          <CardTitle className="flex-row items-center justify-between space-y-8 pb-2">
            Pedidos no mes
          </CardTitle>
          <Utensils className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="space-y-1">
          {monthOrdersAmount && (
            <>
              <span className="trancking-tight text-2xl font-bold">
                {monthOrdersAmount.amount.toLocaleString("pt-BR")}
              </span>
              {monthOrdersAmount.diffFromLastMonth >= 0 ? (
                <p className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{monthOrdersAmount.diffFromLastMonth}
                  </span>{" "}
                  em relação a ontem
                </p>
              ) : (
                <p className="text-xs text-muted-foreground">
                  <span className="text-rose-500 dark:text-rose-400">
                    {monthOrdersAmount.diffFromLastMonth}
                  </span>{" "}
                  em relação a ontem
                </p>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </>
  );
}
