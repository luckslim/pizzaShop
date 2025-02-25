import { useQuery } from "@tanstack/react-query";
import { Button } from "./components/ui/button";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Textarea } from "./components/ui/textarea";
import { getManagedRestaurant } from "@/api/get-managed-restaurant";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"

const storeProfileSchema = z.object({
    name: z.string().min(1),
    description: z.string(),
})
type StoreProfileSchema = z.infer<typeof storeProfileSchema>
export function StoreProfileDialog() {
    const { data: managedRestaurant} = useQuery({
        queryKey: ['manager-restaurant'],
        queryFn: getManagedRestaurant,
    })
    const {
        register,
        handleSubmit,
    }= useForm<StoreProfileSchema>({
        resolver: zodResolver(storeProfileSchema),
        values: {
            name: managedRestaurant?.name ?? '',
            description: managedRestaurant?.description ?? '',
        }

    })
    
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Perfil da loja</DialogTitle>
                <DialogDescription>
                    Atualize as informações do estabelecimento visíveis ao seu cliente
                </DialogDescription>
            </DialogHeader>
            <form action="">
                <div className="space-y-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="name">Nome</Label>
                        <Input type="text" className="col-span-3" id="name" {...register('name')}/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="description">Descrição</Label>
                        <Textarea className="col-span-3" id="description" {...register('description')}></Textarea>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="ghost" type="button">Cancelar</Button>
                    <Button type="submit" variant="success">Salvar</Button>
                </DialogFooter>
            </form>

        </DialogContent>
    )
}