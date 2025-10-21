import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Plus, Settings2, MoreHorizontal, TrendingUp, Users, Briefcase, Heart } from "lucide-react";
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

const tableData = [
  { header: "Introduction", section: "Main Content", status: "Done", target: "100%", limit: "5000 words", reviewer: "John Doe" },
  { header: "Market Analysis", section: "Research", status: "In Process", target: "75%", limit: "3000 words", reviewer: "Jane Smith" },
  { header: "Technical Approach", section: "Methodology", status: "In Process", target: "60%", limit: "4000 words", reviewer: "Bob Johnson" },
  { header: "Budget Overview", section: "Financial", status: "Done", target: "100%", limit: "2000 words", reviewer: "Alice Brown" },
  { header: "Team Structure", section: "Personnel", status: "In Process", target: "80%", limit: "1500 words", reviewer: "Charlie Davis" },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full bg-gray-900">
      <HubWorkSidebar />

      {/* Main Content */}
      <main className="flex-1 lg:pl-80 pt-16 lg:pt-0">
        <div className="flex flex-col">
          {/* Content */}
          <div className="flex flex-1 flex-col gap-6 p-6">

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {statsCards.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="bg-gray-950 border-gray-800">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-gray-400 font-sans">
                        {stat.title}
                      </CardTitle>
                      <Icon className={`h-4 w-4 ${stat.color}`} />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-white font-sans">{stat.value}</div>
                      <p className="text-xs text-green-400 font-sans">{stat.change} desde o último mês</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Gráfico de Área */}
            <Card className="bg-gray-950 border-gray-800">
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

            {/* Gráfico de Linha */}
            <Card className="bg-gray-950 border-gray-800">
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

            {/* Table */}
            <Card className="bg-gray-950 border-gray-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Tabs defaultValue="outline" className="w-full">
                      <TabsList className="bg-gray-900 border-gray-800">
                        <TabsTrigger value="outline" className="font-sans text-gray-300 data-[state=active]:bg-gray-800 data-[state=active]:text-white">Outline</TabsTrigger>
                        <TabsTrigger value="performance" className="font-sans text-gray-300 data-[state=active]:bg-gray-800 data-[state=active]:text-white">Past Performance</TabsTrigger>
                        <TabsTrigger value="personnel" className="font-sans text-gray-300 data-[state=active]:bg-gray-800 data-[state=active]:text-white">Key Personnel</TabsTrigger>
                        <TabsTrigger value="documents" className="font-sans text-gray-300 data-[state=active]:bg-gray-800 data-[state=active]:text-white">Focus Documents</TabsTrigger>
                      </TabsList>
                    </Tabs>
                    <Button variant="outline" size="sm" className="font-sans bg-gray-900 border-gray-800 text-gray-300 hover:bg-gray-800 hover:text-white">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Section
                    </Button>
                  </div>
                  <Button variant="outline" size="sm" className="font-sans bg-gray-900 border-gray-800 text-gray-300 hover:bg-gray-800 hover:text-white">
                    <Settings2 className="mr-2 h-4 w-4" />
                    Customize Columns
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-800 hover:bg-gray-900">
                      <TableHead className="font-sans text-gray-400">Header</TableHead>
                      <TableHead className="font-sans text-gray-400">Section Type</TableHead>
                      <TableHead className="font-sans text-gray-400">Status</TableHead>
                      <TableHead className="font-sans text-gray-400">Target</TableHead>
                      <TableHead className="font-sans text-gray-400">Limit</TableHead>
                      <TableHead className="font-sans text-gray-400">Reviewer</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tableData.map((row, index) => (
                      <TableRow key={index} className="border-gray-800 hover:bg-gray-900">
                        <TableCell className="font-medium font-sans text-white">{row.header}</TableCell>
                        <TableCell className="font-sans text-gray-300">{row.section}</TableCell>
                        <TableCell>
                          <Badge
                            variant={row.status === "Done" ? "default" : "secondary"}
                            className={
                              row.status === "Done"
                                ? "bg-green-600/20 text-green-400 hover:bg-green-600/30 font-sans"
                                : "bg-yellow-600/20 text-yellow-400 hover:bg-yellow-600/30 font-sans"
                            }
                          >
                            {row.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-sans text-gray-300">{row.target}</TableCell>
                        <TableCell className="font-sans text-gray-300">{row.limit}</TableCell>
                        <TableCell className="font-sans text-gray-300">{row.reviewer}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
