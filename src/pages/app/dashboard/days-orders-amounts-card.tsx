import { getDayOrdersAmount } from "@/api/get-day-orders-amount";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";

export function DayOrdersAmountCard() {
  const { data: dayOrdersAmount } = useQuery({
    queryFn: getDayOrdersAmount,
    queryKey: ["metrics", "day-orders-amount"],
  });
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
          {dayOrdersAmount && (
            <>
              <span className="trancking-tight text-2xl font-bold">
                {dayOrdersAmount.amount.toLocaleString("pt-BR")}
              </span>
              {dayOrdersAmount.diffFromYesterday >= 0 ? (
                <p className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{dayOrdersAmount.diffFromYesterday}
                  </span>{" "}
                  em relação a ontem
                </p>
              ) : (
                <p className="text-xs text-muted-foreground">
                  <span className="text-rose-500 dark:text-rose-400">
                    -{dayOrdersAmount.diffFromYesterday}
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
