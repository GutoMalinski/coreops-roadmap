import Layout from "@/components/Layout";
import Timeline, { TimelineItemProps } from "@/components/Timeline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Clock, AlertTriangle, Layers, Database, Users, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const stats = [
    { label: "Progresso Total", value: "92%", icon: BarChart3, color: "text-primary" },
    { label: "Tarefas Concluídas", value: "477/517", icon: CheckCircle2, color: "text-green-400" },
    { label: "Integrações", value: "3/3", icon: Layers, color: "text-purple-400" },
    { label: "Módulos Ativos", value: "15", icon: Database, color: "text-blue-400" },
  ];

  const timelineItems: TimelineItemProps[] = [
    {
      week: "Semana 1",
      date: "20 Jan - 26 Jan",
      title: "Fundações e Quick Wins",
      description: "Implementação do CRUD de contatos, finalização das abas de Produtos e RPS com dados reais.",
      status: "completed",
      type: "milestone"
    },
    {
      week: "Semana 2",
      date: "27 Jan - 02 Fev",
      title: "Integração HubSpot (MVP)",
      description: "Conexão inicial, autenticação e criação da aba HubSpot na Ficha do Cliente.",
      status: "completed",
      type: "integration"
    },
    {
      week: "Semana 3",
      date: "03 Fev - 09 Fev",
      title: "Movidesk MVP & Automação HubSpot",
      description: "Conexão com Movidesk para tickets e implementação de webhooks para sync real-time no HubSpot.",
      status: "completed",
      type: "integration"
    },
    {
      week: "Semana 4",
      date: "10 Fev - 16 Fev",
      title: "Movidesk Completo & Azure DevOps MVP",
      description: "Histórico completo de suporte e conexão inicial com roadmap de produto via Azure DevOps.",
      status: "completed",
      type: "integration"
    },
    {
      week: "Semana 5",
      date: "17 Fev - 23 Fev",
      title: "Azure DevOps Completo & Testes",
      description: "Dashboard de roadmap na ficha do cliente e início dos testes integrados ponta-a-ponta.",
      status: "completed",
      type: "milestone"
    },
    {
      week: "Semana 6",
      date: "24 Fev - 28 Fev",
      title: "Entrega Final",
      description: "Polimento, correção de bugs e apresentação final para a diretoria.",
      status: "completed",
      type: "milestone"
    }
  ];

  return (
    <Layout>
      <div className="space-y-8 pb-20">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-2">
              Roadmap <span className="text-primary neon-text">2026</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Plano estratégico para transformar o CoreOps na plataforma central de inteligência de clientes até 28 de Fevereiro.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-green-500">Status: Concluído</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-card/50 border-border backdrop-blur-sm hover:bg-card/80 transition-colors">
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold font-display">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Timeline Section (2/3 width) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold font-display flex items-center gap-2">
                <Clock className="w-6 h-6 text-primary" />
                Cronograma de Execução
              </h2>
            </div>
            <Timeline items={timelineItems} />
          </div>

          {/* Sidebar Info (1/3 width) */}
          <div className="space-y-6">
            {/* Strategic Goals Card */}
            <Card className="bg-gradient-to-br from-card to-background border-border overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10" />
              <CardHeader>
                <CardTitle className="font-display text-xl">Objetivos Estratégicos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Visão 360º do Cliente unificada",
                  "Integração Vendas + CS + Produto",
                  "Dados em tempo real para decisão",
                  "Transparência total de roadmap"
                ].map((goal, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{goal}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Integrations Status */}
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="font-display text-xl">Status das Integrações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { name: "HubSpot", status: "Concluído", progress: 100, color: "bg-green-500" },
                  { name: "Movidesk", status: "Concluído", progress: 100, color: "bg-green-500" },
                  { name: "Azure DevOps", status: "Concluído", progress: 100, color: "bg-green-500" }
                ].map((integration, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{integration.name}</span>
                      <span className="text-muted-foreground">{integration.status}</span>
                    </div>
                    <Progress value={integration.progress} className="h-2 bg-white/5" indicatorClassName={integration.color} />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Risk Analysis */}
            <Card className="bg-red-500/5 border-red-500/20">
              <CardHeader>
                <CardTitle className="font-display text-xl flex items-center gap-2 text-red-400">
                  <AlertTriangle className="w-5 h-5" />
                  Riscos Principais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  <p className="mb-2"><strong className="text-foreground">Imprevistos Técnicos:</strong> Mitigado com buffer de 5 dias no cronograma.</p>
                  <p><strong className="text-foreground">APIs Externas:</strong> Testes de conexão antecipados na primeira semana.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
