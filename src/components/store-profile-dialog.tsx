import { Button } from "./components/ui/button";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./components/ui/dialog";
import { Label } from "./components/ui/label";


export function StoreProfileDialog() {
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
                        <Label className="text-"></Label>

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