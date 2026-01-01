import { History, Construction, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ClientHistory() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex items-center justify-center p-4">
      <Card className="max-w-md w-full border-gray-200 dark:border-gray-800 shadow-lg">
        <CardContent className="p-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-20 w-20 rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center animate-pulse">
              <Construction className="h-10 w-10 text-amber-600 dark:text-amber-500" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Página em Manutenção
          </h1>
          
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <p className="text-lg leading-relaxed">
              Esta página está sendo atualizada para oferecer uma experiência melhor aos nossos usuários.
            </p>
            
            <div className="flex items-center justify-center gap-2 py-4 px-6 bg-gray-100 dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-semibold text-gray-900 dark:text-white">
                Disponível novamente em: 06/01/2026
              </span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-center gap-2">
            <History className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Histórico de Clientes</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
