import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import HubWorkSidebar from "@/components/HubWorkSidebar";
import { User, Briefcase, GraduationCap, FileText, MapPin, Mail, Phone, Calendar, CheckCircle, Clock, Upload, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function MeuPerfil() {
  // Dados mock do usuário
  const usuario = {
    nome: "Maria Silva",
    email: "maria.silva@email.com",
    telefone: "(11) 98765-4321",
    localizacao: "São Paulo, SP",
    dataCadastro: "Janeiro 2025",
  };

  const candidaturas = [
    {
      id: 1,
      vaga: "Auxiliar Administrativo",
      empresa: "Empresa ABC",
      status: "Em análise",
      data: "20/01/2025",
      statusColor: "bg-yellow-950/50 text-yellow-400 border-yellow-800",
    },
    {
      id: 2,
      vaga: "Atendente de Loja",
      empresa: "Varejo XYZ",
      status: "Aguardando entrevista",
      data: "18/01/2025",
      statusColor: "bg-blue-950/50 text-blue-400 border-blue-800",
    },
    {
      id: 3,
      vaga: "Recepcionista",
      empresa: "Clínica Saúde Total",
      status: "Concluído",
      data: "15/01/2025",
      statusColor: "bg-green-950/50 text-green-400 border-green-800",
    },
  ];

  const cursosMatriculados = [
    {
      id: 1,
      titulo: "Excel Básico ao Avançado",
      progresso: 75,
      status: "Em andamento",
    },
    {
      id: 2,
      titulo: "Atendimento ao Cliente",
      progresso: 100,
      status: "Concluído",
    },
    {
      id: 3,
      titulo: "Elaboração de Currículos",
      progresso: 30,
      status: "Em andamento",
    },
  ];

  return (
    <div className="flex min-h-screen w-full bg-[#030712]">
      <HubWorkSidebar />

      <main className="flex-1 lg:pl-80 pt-16 lg:pt-0 relative">
        {/* Animated background elements */}
        <div className="fixed inset-0 lg:left-80 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="relative flex flex-col min-h-screen z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sticky top-0 z-30 backdrop-blur-xl bg-[#030712]/80 border-b border-white/5"
          >
            <div className="px-6 py-8">
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <User className="w-10 h-10 text-purple-400" />
                  </div>
                </motion.div>
                <div>
                  <h1 className="text-3xl font-bold text-white font-sans tracking-tight">{usuario.nome}</h1>
                  <p className="text-sm text-gray-400 font-sans mt-1">Membro desde {usuario.dataCadastro}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="p-6">
            <Tabs defaultValue="perfil" className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <TabsList className="bg-white/5 backdrop-blur-sm border border-white/10 mb-8 p-1">
                  <TabsTrigger
                    value="perfil"
                    className="font-sans text-gray-400 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white transition-all"
                  >
                    <User className="mr-2 h-4 w-4" />
                    Meu Perfil
                  </TabsTrigger>
                  <TabsTrigger
                    value="candidaturas"
                    className="font-sans text-gray-400 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white transition-all"
                  >
                    <Briefcase className="mr-2 h-4 w-4" />
                    Minhas Candidaturas
                  </TabsTrigger>
                  <TabsTrigger
                    value="cursos"
                    className="font-sans text-gray-400 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white transition-all"
                  >
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Meus Cursos
                  </TabsTrigger>
                </TabsList>
              </motion.div>

              {/* Perfil Tab */}
              <TabsContent value="perfil">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Card className="bg-white/[0.02] backdrop-blur-sm border-white/10 hover:border-purple-500/30 transition-all">
                      <CardContent className="p-6">
                        <div className="mb-6">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="relative">
                              <div className="absolute inset-0 bg-purple-500/20 blur-lg rounded-full"></div>
                              <div className="relative w-10 h-10 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center">
                                <User className="h-5 w-5 text-purple-400" />
                              </div>
                            </div>
                            <h3 className="text-xl font-bold text-white font-sans">Informações Pessoais</h3>
                          </div>
                          <p className="text-sm text-gray-400 font-sans">Mantenha seus dados atualizados</p>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="nome" className="text-gray-300 font-sans text-sm">Nome Completo</Label>
                            <Input
                              id="nome"
                              defaultValue={usuario.nome}
                              className="bg-white/5 border-white/10 text-white font-sans focus:border-purple-500/50 focus:bg-white/10 transition-all h-11"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-300 font-sans text-sm">Email</Label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                              <Input
                                id="email"
                                type="email"
                                defaultValue={usuario.email}
                                className="pl-10 bg-white/5 border-white/10 text-white font-sans focus:border-purple-500/50 focus:bg-white/10 transition-all h-11"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="telefone" className="text-gray-300 font-sans text-sm">Telefone</Label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                              <Input
                                id="telefone"
                                defaultValue={usuario.telefone}
                                className="pl-10 bg-white/5 border-white/10 text-white font-sans focus:border-purple-500/50 focus:bg-white/10 transition-all h-11"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="localizacao" className="text-gray-300 font-sans text-sm">Localização</Label>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                              <Input
                                id="localizacao"
                                defaultValue={usuario.localizacao}
                                className="pl-10 bg-white/5 border-white/10 text-white font-sans focus:border-purple-500/50 focus:bg-white/10 transition-all h-11"
                              />
                            </div>
                          </div>
                          <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-sans h-11 mt-6">
                            <Sparkles className="mr-2 h-4 w-4" />
                            Salvar Alterações
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Card className="bg-white/[0.02] backdrop-blur-sm border-white/10 hover:border-purple-500/30 transition-all">
                      <CardContent className="p-6">
                        <div className="mb-6">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="relative">
                              <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full"></div>
                              <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
                                <FileText className="h-5 w-5 text-blue-400" />
                              </div>
                            </div>
                            <h3 className="text-xl font-bold text-white font-sans">Currículo</h3>
                          </div>
                          <p className="text-sm text-gray-400 font-sans">Gerencie seu currículo</p>
                        </div>

                        <div className="space-y-4">
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center bg-white/[0.02] hover:border-purple-500/30 transition-all cursor-pointer"
                          >
                            <div className="relative inline-block mb-4">
                              <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full"></div>
                              <Upload className="relative h-12 w-12 text-purple-400 mx-auto" />
                            </div>
                            <p className="text-gray-400 mb-4 font-sans">
                              Seu currículo não foi enviado ainda
                            </p>
                            <Button variant="outline" className="border-white/10 text-gray-300 hover:bg-white/5 font-sans">
                              <Upload className="mr-2 h-4 w-4" />
                              Upload de Currículo
                            </Button>
                          </motion.div>
                          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4 backdrop-blur-sm">
                            <div className="flex items-start gap-3">
                              <Sparkles className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                              <p className="text-sm text-blue-400 font-sans">
                                Dica: Um currículo bem feito aumenta suas chances em até 80%!
                                Faça nosso curso gratuito de elaboração de currículos.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </TabsContent>

              {/* Candidaturas Tab */}
              <TabsContent value="candidaturas">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Card className="bg-white/[0.02] backdrop-blur-sm border-white/10">
                    <CardContent className="p-6">
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="relative">
                            <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full"></div>
                            <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
                              <Briefcase className="h-5 w-5 text-blue-400" />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-white font-sans">Minhas Candidaturas</h3>
                        </div>
                        <p className="text-sm text-gray-400 font-sans">Acompanhe o status das suas candidaturas</p>
                      </div>

                      <div className="space-y-4">
                        {candidaturas.map((candidatura, index) => (
                          <motion.div
                            key={candidatura.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            whileHover={{ scale: 1.01 }}
                            className="group relative overflow-hidden bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-purple-500/30 transition-all"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="relative flex items-start justify-between mb-3">
                              <div className="flex items-start gap-3">
                                <div className="relative mt-1">
                                  <div className="absolute inset-0 bg-blue-500/20 blur-md rounded-full"></div>
                                  <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center">
                                    <Briefcase className="h-5 w-5 text-blue-400" />
                                  </div>
                                </div>
                                <div>
                                  <h3 className="text-lg font-semibold text-white font-sans group-hover:text-purple-400 transition-colors">
                                    {candidatura.vaga}
                                  </h3>
                                  <p className="text-gray-400 font-sans text-sm">{candidatura.empresa}</p>
                                </div>
                              </div>
                              <Badge className={`${candidatura.statusColor} font-sans border-0`}>
                                {candidatura.status}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500 ml-[52px]">
                              <Calendar className="h-3.5 w-3.5" />
                              <span className="font-sans">Candidatura enviada em {candidatura.data}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* Cursos Tab */}
              <TabsContent value="cursos">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Card className="bg-white/[0.02] backdrop-blur-sm border-white/10">
                    <CardContent className="p-6">
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="relative">
                            <div className="absolute inset-0 bg-green-500/20 blur-lg rounded-full"></div>
                            <div className="relative w-10 h-10 bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl flex items-center justify-center">
                              <GraduationCap className="h-5 w-5 text-green-400" />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-white font-sans">Meus Cursos</h3>
                        </div>
                        <p className="text-sm text-gray-400 font-sans">Acompanhe seu progresso nos cursos</p>
                      </div>

                      <div className="space-y-4">
                        {cursosMatriculados.map((curso, index) => (
                          <motion.div
                            key={curso.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            whileHover={{ scale: 1.01 }}
                            className="group relative overflow-hidden bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-green-500/30 transition-all"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="relative flex items-start justify-between mb-4">
                              <div className="flex items-start gap-3 flex-1">
                                <div className="relative mt-1">
                                  <div className="absolute inset-0 bg-green-500/20 blur-md rounded-full"></div>
                                  <div className="relative w-10 h-10 bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg flex items-center justify-center">
                                    <GraduationCap className="h-5 w-5 text-green-400" />
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <h3 className="text-lg font-semibold text-white font-sans group-hover:text-green-400 transition-colors">
                                    {curso.titulo}
                                  </h3>
                                  <div className="flex items-center gap-2 mt-2">
                                    {curso.progresso === 100 ? (
                                      <CheckCircle className="h-4 w-4 text-green-400" />
                                    ) : (
                                      <Clock className="h-4 w-4 text-yellow-400" />
                                    )}
                                    <span className="text-sm text-gray-400 font-sans">{curso.status}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-end ml-4">
                                <span className="text-2xl font-bold text-green-400 font-sans">
                                  {curso.progresso}%
                                </span>
                              </div>
                            </div>

                            <div className="relative ml-[52px] mb-4">
                              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${curso.progresso}%` }}
                                  transition={{ duration: 1, delay: 0.2 * index }}
                                  className={`h-2 rounded-full ${
                                    curso.progresso === 100
                                      ? "bg-gradient-to-r from-green-500 to-blue-500"
                                      : "bg-gradient-to-r from-green-500 to-green-400"
                                  }`}
                                />
                              </div>
                            </div>

                            <div className="ml-[52px]">
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-sans"
                              >
                                {curso.progresso === 100 ? "Revisar Curso" : "Continuar Curso"}
                              </Button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}
