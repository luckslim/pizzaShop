import { Button } from "@/components/components/ui/button";
import { Input } from "@/components/components/ui/input";
import { Label } from "@radix-ui/react-label";

export function SignIn(){
    return(
        <>
        <div className="p-8">
            <div className="flex w-[350px] flex-col justify-center gap-6">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">Acessar Painel</h1>
                    <p className="text-sm text-muted-foreground">
                        Acompanhe suas vendas pelo painel do parceiro!
                    </p>
                </div>
                <form className="space-y-4">
                    <div className="space-y-2">
                       <Label htmlFor="email">Seu email</Label> 
                       <Input id="email" type="email"></Input>
                    </div>
                    <Button className="w-full" type="submit" >Acessar Painel</Button>
                </form>

            </div>
        </div>
        </>
         )
}