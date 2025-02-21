import { resgisterRestaurant } from "@/api/register-restaurant";
import { Button } from "@/components/components/ui/button";
import { Input } from "@/components/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from 'zod'


const signUpForm = z.object({
    email: z.string().email(),
    restaurantName: z.string(),
    phone: z.string(),
    managerName : z.string(),
})
type SignUpForm = z.infer<typeof signUpForm>
export function SignUp() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignUpForm>()
    const { mutateAsync: registerRestaurantFn} = useMutation({
        mutationFn: resgisterRestaurant,

    })
    async function handleSignUp(data: SignUpForm) {
        try {
            await registerRestaurantFn({
                restaurantName: data.restaurantName,
                managerName: data.managerName,
                email: data.email,
                phone: data.phone,
            })
            toast.success('Restaurante cadastrado com sucesso!',{
                action:{
                    label:'login',
                    onClick:() => navigate(`/sign-in?email=${data.email}`)
                }
            })
        } catch {
            toast.error('Erro ao cadastrar restaurante')

        }

    }

    return (
        <>
            <div className="p-8">
                <Button variant="secondary" asChild className="absolute right-8 top-8">
                    <Link to="/sign-in" className="">
                        Fazer login
                    </Link>
                </Button>
                <div className="flex w-[350px] flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Criar Conta Grátis</h1>
                        <p className="text-sm text-muted-foreground">
                            seja um parceiro e comece suas vendas!
                        </p>
                    </div>
                    <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Seu email</Label>
                            <Input id="email" type="email" {...register('email')}></Input>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="restaurantName">Nome do Estabelecimento</Label>
                            <Input id="restaurantName" type="text" {...register('restaurantName')}></Input>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="managerName">Seu nome</Label>
                            <Input id="managerName" type="text" {...register('managerName')}></Input>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Seu telefone</Label>
                            <Input id="phone" type="tel" {...register('phone')}></Input>
                        </div>
                        <Button disabled={isSubmitting} className="w-full" type="submit" >Finalizar Cadastro</Button>
                        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                            Ao continuar, você concorda com nossos termos de serviço e políticas de privacidade
                        </p>
                    </form>

                </div>
            </div>
        </>
    )
}