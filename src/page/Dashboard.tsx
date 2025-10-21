import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Briefcase, Heart, CheckCircle, Clock, AlertCircle, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import HubWorkSidebar from "@/components/HubWorkSidebar";

// Dados para gráfico de área
const areaChartData = [
  { month: "Jan", candidatos: 186, vagas: 80 },
  { month: "Fev", candidatos: 305, vagas: 200 },
  { month: "Mar", candidatos: 237, vagas: 120 },
  { month: "Abr", candidatos: 273, vagas: 190 },
  { month: "Mai", candidatos: 209, vagas: 130 },
  { month: "Jun", candidatos: 314, vagas: 140 },
];

// Dados para gráfico de linha
const lineChartData = [
  { semana: "Sem 1", aplicacoes: 120, entrevistas: 45, contratacoes: 12 },
  { semana: "Sem 2", aplicacoes: 150, entrevistas: 62, contratacoes: 18 },
  { semana: "Sem 3", aplicacoes: 180, entrevistas: 78, contratacoes: 22 },
  { semana: "Sem 4", aplicacoes: 140, entrevistas: 55, contratacoes: 15 },
];

// Stats cards data
const statsCards = [
  {
    title: "Pessoas Assistidas",
    value: "2,345",
    change: "+12.5%",
    icon: Users,
    color: "text-blue-400",
  },
  {
    title: "Vagas Disponíveis",
    value: "54",
    change: "+3",
    icon: Briefcase,
    color: "text-green-400",
  },
  {
    title: "Taxa de Colocação",
    value: "23.8%",
    change: "+4.2%",
    icon: TrendingUp,
    color: "text-purple-400",
  },
  {
    title: "Vidas Transformadas",
    value: "1,234",
    change: "+18.7%",
    icon: Heart,
    color: "text-red-400",
  },
];

const candidatosRecentes = [
  { nome: "Maria Silva", vaga: "Auxiliar Administrativo", empresa: "Empresa ABC", status: "Entrevista Agendada", data: "20/01/2025", telefone: "(11) 98765-4321", email: "maria@email.com" },
  { nome: "João Santos", vaga: "Atendente de Loja", empresa: "Varejo XYZ", status: "Aguardando Retorno", data: "19/01/2025", telefone: "(11) 97654-3210", email: "joao@email.com" },
  { nome: "Ana Costa", vaga: "Recepcionista", empresa: "Clínica Saúde", status: "Contratado", data: "18/01/2025", telefone: "(11) 96543-2109", email: "ana@email.com" },
  { nome: "Pedro Oliveira", vaga: "Auxiliar de Cozinha", empresa: "Restaurante Bom Sabor", status: "Em Análise", data: "17/01/2025", telefone: "(11) 95432-1098", email: "pedro@email.com" },
  { nome: "Carla Mendes", vaga: "Vendedor", empresa: "Loja Roupas", status: "Entrevista Agendada", data: "16/01/2025", telefone: "(11) 94321-0987", email: "carla@email.com" },
];

export default function Dashboard() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Contratado":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "Entrevista Agendada":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Em Análise":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "Aguardando Retorno":
        return "bg-orange-500/10 text-orange-400 border-orange-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Contratado":
        return <CheckCircle className="h-4 w-4" />;
      case "Entrevista Agendada":
        return <Clock className="h-4 w-4" />;
      case "Em Análise":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-[#030712]">
      <HubWorkSidebar />

      {/* Main Content */}
      <main className="flex-1 lg:pl-80 pt-16 lg:pt-0 relative">
        {/* Animated background */}
        <div className="fixed inset-0 lg:left-80 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="relative flex flex-col z-10">
          {/* Content */}
          <div className="flex flex-1 flex-col gap-6 p-6">

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {statsCards.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="group relative overflow-hidden bg-white/[0.02] backdrop-blur-sm border-white/10 hover:border-purple-500/30 transition-all">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                      <CardContent className="p-6 relative">
                        <div className="flex items-center justify-between mb-4">
                          <div className="relative">
                            <div className={`absolute inset-0 ${stat.color.replace('text-', 'bg-')}/20 blur-lg rounded-full`}></div>
                            <div className={`relative w-12 h-12 bg-gradient-to-br ${stat.color.replace('text-', 'from-')}/10 to-purple-500/10 border border-${stat.color.replace('text-', '')}/20 rounded-xl flex items-center justify-center`}>
                              <Icon className={`h-6 w-6 ${stat.color}`} />
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm text-gray-400 font-sans mb-1">{stat.title}</p>
                          <h3 className="text-3xl font-bold text-white font-sans mb-2">{stat.value}</h3>
                          <p className="text-xs text-green-400 font-sans flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" />
                            {stat.change} desde o último mês
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Gráfico de Área */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="bg-white/[0.02] backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="font-sans text-white">Pessoas Assistidas vs Vagas</CardTitle>
                  <CardDescription className="font-sans text-gray-400">
                    Evolução mensal de pessoas em busca de emprego e vagas disponíveis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={areaChartData}>
                    <defs>
                      <linearGradient id="colorCandidatos" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                      </linearGradient>
                      <linearGradient id="colorVagas" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151" }}
                      labelStyle={{ color: "#fff" }}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="candidatos"
                      stroke="#3b82f6"
                      fillOpacity={1}
                      fill="url(#colorCandidatos)"
                      name="Pessoas"
                    />
                    <Area
                      type="monotone"
                      dataKey="vagas"
                      stroke="#10b981"
                      fillOpacity={1}
                      fill="url(#colorVagas)"
                      name="Vagas"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
              </Card>
            </motion.div>

            {/* Gráfico de Linha */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="bg-white/[0.02] backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="font-sans text-white">Funil de Colocação</CardTitle>
                  <CardDescription className="font-sans text-gray-400">
                    Acompanhamento semanal do processo de geração de emprego
                  </CardDescription>
                </CardHeader>
                <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={lineChartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="semana" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151" }}
                      labelStyle={{ color: "#fff" }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="aplicacoes" stroke="#3b82f6" strokeWidth={2} name="Cadastros" />
                    <Line type="monotone" dataKey="entrevistas" stroke="#f59e0b" strokeWidth={2} name="Encaminhamentos" />
                    <Line type="monotone" dataKey="contratacoes" stroke="#10b981" strokeWidth={2} name="Colocações" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
              </Card>
            </motion.div>

            {/* Table - Candidatos Recentes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Card className="bg-white/[0.02] backdrop-blur-sm border-white/10">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="font-sans text-white text-xl mb-2">Candidatos Recentes</CardTitle>
                      <CardDescription className="font-sans text-gray-400">
                        Acompanhe os últimos encaminhamentos e status de colocação
                      </CardDescription>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-sans">
                      Ver Todos
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-white/10 hover:bg-white/5">
                          <TableHead className="font-sans text-gray-400">Candidato</TableHead>
                          <TableHead className="font-sans text-gray-400">Vaga</TableHead>
                          <TableHead className="font-sans text-gray-400">Empresa</TableHead>
                          <TableHead className="font-sans text-gray-400">Status</TableHead>
                          <TableHead className="font-sans text-gray-400">Data</TableHead>
                          <TableHead className="font-sans text-gray-400">Contato</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {candidatosRecentes.map((candidato, index) => (
                          <TableRow key={index} className="border-white/10 hover:bg-white/5 transition-colors">
                            <TableCell className="font-medium font-sans text-white">
                              <div>
                                <p className="font-semibold">{candidato.nome}</p>
                                <p className="text-xs text-gray-500">{candidato.email}</p>
                              </div>
                            </TableCell>
                            <TableCell className="font-sans text-gray-300">{candidato.vaga}</TableCell>
                            <TableCell className="font-sans text-gray-300">{candidato.empresa}</TableCell>
                            <TableCell>
                              <Badge className={`${getStatusColor(candidato.status)} font-sans border flex items-center gap-1 w-fit`}>
                                {getStatusIcon(candidato.status)}
                                {candidato.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="font-sans text-gray-400 text-sm">{candidato.data}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                                >
                                  <Phone className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
                                >
                                  <Mail className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
