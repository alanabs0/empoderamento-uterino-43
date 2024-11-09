import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { HeartHandshake } from "lucide-react";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Login realizado com sucesso!");
  };

  const handleGoogleLogin = () => {
    toast.info("Login com Google em desenvolvimento");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <HeartHandshake className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl text-center font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Bem-vinda de volta
          </CardTitle>
          <CardDescription className="text-center">
            Entre com sua conta para continuar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <Button
              variant="outline"
              onClick={handleGoogleLogin}
              className="w-full hover:bg-primary/5"
            >
              Continuar com Google
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Ou continue com email
                </span>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nome@exemplo.com"
                  required
                  className="focus:ring-primary"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  required
                  className="focus:ring-primary"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary-dark">
                Entrar
              </Button>
            </form>
            <div className="text-center text-sm">
              Não tem uma conta?{" "}
              <Link to="/register" className="text-primary hover:text-primary-dark font-medium">
                Registre-se
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;