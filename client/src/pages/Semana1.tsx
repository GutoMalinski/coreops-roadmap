import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Semana1() {
  const tasks = [
    {
      id: 1,
      title: "CRUD de Clientes Completo",
      description: "Implementado sistema completo de gestão de clientes com listagem, criação, edição e deleção.",
      status: "completed",
      date: "20-21 Jan",
      impact: "Alto"
    },
    {
      id: 2,
      title: "Sistema de Produtos Hierárquico",
      description: "Cadastro de produtos core e derivados com relação many-to-many com clientes.",
      status: "completed",
      date: "21-22 Jan",
      impact: "Alto"
    },
    {
      id: 3,
      title: "Avaliação de Relacionamento (Touch Level)",
      description: "Sistema de flip cards interativos para avaliação de relacionamento com clientes.",
      status: "completed",
      date: "22-23 Jan",
      impact: "Alto"
    },
    {
      id: 4,
      title: "Importação de Planilhas Excel",
      description: "Sistema de importação com preview editável e tratamento de duplicatas.",
      status: "completed",
      date: "23-24 Jan",
      impact: "Médio"
    },
    {
      id: 5,
      title: "Busca Automática de Logomarcas",
      description: "Integração com API de busca de imagens e upload para S3.",
      status: "completed",
      date: "24-25 Jan",
      impact: "Médio"
    },
    {
      id: 6,
      title: "Sistema de MRR (Monthly Recurring Revenue)",
      description: "Histórico mensal de MRR por cliente com dashboard de evolução.",
      status: "completed",
      date: "25-26 Jan",
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
            <h1 className="text-3xl font-bold tracking-tight text-white">Semana 1: Fundações e Quick Wins</h1>
            <p className="text-slate-400 mt-2">
              Foco em finalizar funcionalidades essenciais para preparar o terreno para as integrações.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-lg border border-green-500/20">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <span className="font-medium text-green-400">20 Jan - 26 Jan</span>
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
              {completedTasks} de {tasks.length} atividades entregues. Excelente trabalho!
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
              <Card key={task.id} className="flex flex-col border-green-900/30 bg-green-900/10">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge 
                      variant="default"
                      className="bg-green-500/20 text-green-400 hover:bg-green-500/30 border-green-500/20"
                    >
                      Concluído
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
                    <span>Impacto: <strong className="text-slate-300">{task.impact}</strong></span>
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
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
            <p>✅ <strong>6 funcionalidades core</strong> implementadas e testadas</p>
            <p>✅ <strong>Sistema de avaliação</strong> com flip cards interativos</p>
            <p>✅ <strong>Importação de dados</strong> com preview e validação</p>
            <p>✅ <strong>Dashboard de MRR</strong> com gráficos e métricas</p>
            <p>✅ <strong>Base sólida</strong> para integrações das próximas semanas</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
