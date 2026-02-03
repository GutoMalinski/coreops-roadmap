import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Semana4() {
  const tasks = [
    {
      id: 1,
      title: "Movidesk Completa",
      description: "Criar aba 'Suporte' na Ficha Cliente com histórico de tickets e estatísticas.",
      status: "completed",
      date: "10-13 Fev",
      impact: "Médio"
    },
    {
      id: 2,
      title: "Azure DevOps MVP",
      description: "Conexão, autenticação e busca de work items (roadmap) por cliente via tags.",
      status: "completed",
      date: "14-16 Fev",
      impact: "Médio"
    }
  ];

  const completedTasks = tasks.filter(t => t.status === "completed").length;
  const progress = (completedTasks / tasks.length) * 100;

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Semana 4: Suporte Completo e Produto</h1>
            <p className="text-slate-400 mt-2">
              Finalização da visão de suporte e início da integração com o roadmap de produto.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-lg border border-green-500/20">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <span className="font-medium text-green-400">10 Fev - 16 Fev</span>
          </div>
        </div>

        {/* Progresso Geral */}
        <Card className="border-l-4 border-l-green-500 bg-slate-900/50 border-slate-800">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg font-medium text-white">Progresso da Semana</CardTitle>
              <span className="text-sm font-bold text-green-400">{Math.round(progress)}% Concluído</span>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={progress} className="h-2 bg-slate-800" indicatorClassName="bg-green-500" />
            <p className="text-sm text-slate-400 mt-2">
              {completedTasks} de {tasks.length} atividades entregues.
            </p>
          </CardContent>
        </Card>

        {/* Lista de Atividades */}
        <div className="grid gap-6">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-white">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            Atividades Concluídas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {tasks.map((task) => (
              <Card key={task.id} className={`flex flex-col border-slate-800 bg-slate-900/30 ${task.status === 'completed' ? 'border-green-900/30 bg-green-900/10' : ''}`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge 
                      variant={task.status === 'completed' ? 'default' : task.status === 'in_progress' ? 'secondary' : 'outline'}
                      className={
                        task.status === 'completed' ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30 border-green-500/20' : 
                        task.status === 'in_progress' ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30 border-green-500/20' : 
                        'border-slate-700 text-slate-400'
                      }
                    >
                      {task.status === 'completed' ? 'Concluído' : task.status === 'in_progress' ? 'Em Andamento' : 'Pendente'}
                    </Badge>
                    <span className="text-xs font-medium text-slate-500 border border-slate-800 px-2 py-1 rounded">
                      {task.date}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-white">{task.title}</CardTitle>
                  <CardDescription className="mt-2 text-slate-400">{task.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto pt-0">
                  <div className="flex items-center justify-between text-sm text-slate-500 border-t border-slate-800 pt-4 mt-2">
                    <span>Impacto: <span className="font-medium text-slate-300">{task.impact}</span></span>
                    {task.status === 'in_progress' && (
                      <div className="flex items-center text-green-500 text-xs font-medium animate-pulse">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        Trabalhando agora
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Próximos Passos */}
        <Card className="bg-gradient-to-r from-slate-900 to-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-xl text-white">Próxima Fase: Azure DevOps Completa</CardTitle>
            <CardDescription className="text-slate-400">
              Prepare-se para a Semana 5 (17 Fev - 23 Fev)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1 space-y-2">
                <p className="text-sm text-slate-300">
                  Na próxima semana, entregaremos a visão completa do roadmap de produto dentro do CoreOps
                  e iniciaremos os testes integrados de todo o sistema.
                </p>
              </div>
              <div className="flex items-center gap-4 bg-black/20 p-4 rounded-lg backdrop-blur-sm border border-white/5">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-500">1.5</p>
                  <p className="text-xs text-slate-400">Semanas</p>
                </div>
                <div className="h-8 w-px bg-white/10"></div>
                <div>
                  <p className="font-medium text-sm text-white">Duração Estimada</p>
                  <p className="text-xs text-slate-400">Fase Final</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
