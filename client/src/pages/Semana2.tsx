import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Semana2() {
  const tasks = [
    {
      id: 1,
      title: "Importação de RPS Semanal",
      description: "Sistema de importação Excel/CSV com preview editável para dados de RPS.",
      status: "completed",
      date: "27-28 Jan",
      impact: "Alto"
    },
    {
      id: 2,
      title: "Reunião CS (Segunda-feira)",
      description: "Interface para distribuir itens de ação por cliente com filtros avançados.",
      status: "completed",
      date: "28-29 Jan",
      impact: "Alto"
    },
    {
      id: 3,
      title: "Ações STO (Terça-feira)",
      description: "Cadastro de ações por item com múltiplas ações por cliente e histórico.",
      status: "completed",
      date: "29-30 Jan",
      impact: "Alto"
    },
    {
      id: 4,
      title: "Reunião de Operações (Quarta-feira)",
      description: "Sistema de revisão de ações com comentários colaborativos e próximas ações.",
      status: "completed",
      date: "30-31 Jan",
      impact: "Alto"
    },
    {
      id: 5,
      title: "Reunião de Segmentos (Quinta-feira)",
      description: "Apresentação final com cards de clientes, filtros e exportação PDF/Excel.",
      status: "completed",
      date: "01-02 Fev",
      impact: "Alto"
    }
  ];

  const completedTasks = tasks.filter(t => t.status === "completed").length;
  const progress = (completedTasks / tasks.length) * 100;

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Semana 2: Fluxo Semanal CS</h1>
            <p className="text-slate-400 mt-2">
              Implementação completa do fluxo operacional semanal de Customer Success.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-lg border border-green-500/20">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <span className="font-medium text-green-400">27 Jan - 02 Fev</span>
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
              {completedTasks} de {tasks.length} atividades entregues. Fluxo completo implementado!
            </p>
          </CardContent>
        </Card>

        {/* Lista de Atividades */}
        <div className="grid gap-6">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-white">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            Atividades Concluídas
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <Card key={task.id} className={`flex flex-col border-slate-800 bg-slate-900/30 ${task.status === 'completed' ? 'border-green-900/30 bg-green-900/10' : ''}`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge 
                      variant={task.status === 'completed' ? 'default' : task.status === 'in_progress' ? 'secondary' : 'outline'}
                      className={
                        task.status === 'completed' ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30 border-green-500/20' : 
                        task.status === 'in_progress' ? 'bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 border-orange-500/20' : 
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
                      <div className="flex items-center text-orange-500 text-xs font-medium animate-pulse">
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

        {/* Conquistas da Semana */}
        <Card className="bg-gradient-to-br from-green-900/20 to-slate-900/50 border-green-500/20">
          <CardHeader>
            <CardTitle className="text-xl font-display text-white flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-green-500" />
              Conquistas da Semana
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-slate-300">
            <p>✅ <strong>Fluxo semanal completo</strong> de Segunda a Quinta-feira</p>
            <p>✅ <strong>Sistema de comentários</strong> colaborativos em ações</p>
            <p>✅ <strong>Filtros avançados</strong> por HS, segmento e relacionamento</p>
            <p>✅ <strong>Histórico de ações</strong> das últimas 8 semanas</p>
            <p>✅ <strong>Finalização e bloqueio</strong> de semanas concluídas</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
