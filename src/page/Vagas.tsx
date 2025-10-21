import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import HubWorkSidebar from "@/components/HubWorkSidebar";
import { Search, MapPin, Clock, DollarSign, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

interface Vaga {
  id: number;
  titulo: string;
  empresa: string;
  localizacao: string;
  tipo: string;
  salario: string;
  descricao: string;
  requisitos: string[];
  publicadoEm: string;
}

const vagasData: Vaga[] = [
  {
    id: 1,
    titulo: "Auxiliar Administrativo",
    empresa: "Empresa ABC",
    localizacao: "São Paulo, SP",
    tipo: "CLT",
    salario: "R$ 2.000 - R$ 2.500",
    descricao: "Auxiliar nas atividades administrativas gerais do escritório",
    requisitos: ["Ensino médio completo", "Conhecimento em Excel", "Boa comunicação"],
    publicadoEm: "Há 2 dias",
  },
  {
    id: 2,
    titulo: "Atendente de Loja",
    empresa: "Varejo XYZ",
    localizacao: "Rio de Janeiro, RJ",
    tipo: "CLT",
    salario: "R$ 1.800 + Comissões",
    descricao: "Atendimento ao cliente e organização da loja",
    requisitos: ["Ensino médio completo", "Experiência em vendas", "Disponibilidade para finais de semana"],
    publicadoEm: "Há 1 dia",
  },
  {
    id: 3,
    titulo: "Ajudante de Cozinha",
    empresa: "Restaurante Bom Sabor",
    localizacao: "Belo Horizonte, MG",
    tipo: "CLT",
    salario: "R$ 1.600 - R$ 1.900",
    descricao: "Auxiliar no preparo de alimentos e limpeza da cozinha",
    requisitos: ["Experiência na área", "Disponibilidade de horário"],
    publicadoEm: "Há 3 dias",
  },
  {
    id: 4,
    titulo: "Operador de Caixa",
    empresa: "Supermercado Central",
    localizacao: "Curitiba, PR",
    tipo: "CLT",
    salario: "R$ 1.700",
    descricao: "Operação de caixa e atendimento ao cliente",
    requisitos: ["Ensino médio completo", "Experiência com atendimento", "Pontualidade"],
    publicadoEm: "Há 5 dias",
  },
  {
    id: 5,
    titulo: "Recepcionista",
    empresa: "Clínica Saúde Total",
    localizacao: "Porto Alegre, RS",
    tipo: "CLT",
    salario: "R$ 2.200",
    descricao: "Recepção de pacientes e agendamento de consultas",
    requisitos: ["Ensino médio completo", "Boa comunicação", "Conhecimento básico de informática"],
    publicadoEm: "Há 1 semana",
  },
  {
    id: 6,
    titulo: "Auxiliar de Limpeza",
    empresa: "Serviços Clean",
    localizacao: "Salvador, BA",
    tipo: "CLT",
    salario: "R$ 1.500",
    descricao: "Limpeza e organização de ambientes comerciais",
    requisitos: ["Experiência na área", "Disponibilidade imediata"],
    publicadoEm: "Há 4 dias",
  },
];

export default function Vagas() {
  const [busca, setBusca] = useState("");
  const [localFilter, setLocalFilter] = useState("");

  const vagasFiltradas = vagasData.filter((vaga) => {
    const matchBusca = vaga.titulo.toLowerCase().includes(busca.toLowerCase()) ||
                       vaga.empresa.toLowerCase().includes(busca.toLowerCase());
    const matchLocal = vaga.localizacao.toLowerCase().includes(localFilter.toLowerCase());
    return matchBusca && matchLocal;
  });

  return (
    <div className="flex min-h-screen w-full bg-[#030712]">
      <HubWorkSidebar />

      <main className="flex-1 lg:pl-80 pt-16 lg:pt-0 relative">
        {/* Animated background elements */}
        <div className="fixed inset-0 lg:left-80 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="relative flex flex-col min-h-screen z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sticky top-0 z-30 backdrop-blur-xl bg-[#030712]/80 border-b border-white/5"
          >
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
                    <div className="relative w-14 h-14 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <Briefcase className="h-7 w-7 text-blue-400" />
                    </div>
                  </motion.div>
                  <div>
                    <h1 className="text-3xl font-bold text-white font-sans tracking-tight">
                      Vagas Disponíveis
                    </h1>
                    <p className="text-sm text-gray-400 font-sans mt-1">
                      Encontre sua próxima oportunidade
                    </p>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="hidden md:flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400 font-sans">Atualizado em tempo real</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="px-6 py-6"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-3">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                    <Input
                      placeholder="Buscar vagas..."
                      className="h-12 pl-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 font-sans focus:border-blue-500/50 focus:bg-white/10 transition-all rounded-xl"
                      value={busca}
                      onChange={(e) => setBusca(e.target.value)}
                    />
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 group-hover:text-purple-400 transition-colors" />
                    <Input
                      placeholder="Localização..."
                      className="h-12 pl-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 font-sans focus:border-purple-500/50 focus:bg-white/10 transition-all rounded-xl"
                      value={localFilter}
                      onChange={(e) => setLocalFilter(e.target.value)}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Job Listings */}
          <div className="px-6 pb-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-7xl mx-auto"
            >
              {/* Results counter */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <p className="text-sm text-gray-400 font-sans">
                  <span className="text-2xl font-bold text-white">{vagasFiltradas.length}</span>
                  <span className="ml-2">{vagasFiltradas.length === 1 ? "vaga encontrada" : "vagas encontradas"}</span>
                </p>
              </motion.div>

              <div className="space-y-3">
                {vagasFiltradas.map((vaga, index) => (
                  <motion.div
                    key={vaga.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                  >
                    <Card className="group relative overflow-hidden bg-white/[0.02] backdrop-blur-sm border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500">
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
                      </div>

                      <CardContent className="relative p-6">
                        <div className="flex items-start gap-6">
                          {/* Icon */}
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="flex-shrink-0"
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-lg"></div>
                              <div className="relative w-14 h-14 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl flex items-center justify-center">
                                <Briefcase className="h-6 w-6 text-blue-400" />
                              </div>
                            </div>
                          </motion.div>

                          {/* Content */}
                          <div className="flex-1 min-w-0 space-y-4">
                            {/* Title and Company */}
                            <div>
                              <div className="flex items-start justify-between gap-4 mb-2">
                                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors font-sans">
                                  {vaga.titulo}
                                </h3>
                                <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 font-sans px-3 py-1 text-xs flex-shrink-0">
                                  {vaga.tipo}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-400 font-sans">{vaga.empresa}</p>
                            </div>

                            {/* Meta info */}
                            <div className="flex flex-wrap items-center gap-4 text-sm">
                              <div className="flex items-center gap-2 text-gray-400">
                                <MapPin className="h-4 w-4 text-purple-400" />
                                <span className="font-sans">{vaga.localizacao}</span>
                              </div>
                              <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                              <div className="flex items-center gap-2 text-gray-400">
                                <DollarSign className="h-4 w-4 text-green-400" />
                                <span className="font-sans">{vaga.salario}</span>
                              </div>
                              <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                              <div className="flex items-center gap-2 text-gray-400">
                                <Clock className="h-4 w-4 text-yellow-400" />
                                <span className="font-sans">{vaga.publicadoEm}</span>
                              </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                              {vaga.requisitos.slice(0, 3).map((req, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs bg-white/5 text-gray-300 px-3 py-1.5 rounded-lg border border-white/10 font-sans"
                                >
                                  {req}
                                </span>
                              ))}
                              {vaga.requisitos.length > 3 && (
                                <span className="text-xs text-gray-500 px-3 py-1.5 font-sans">
                                  +{vaga.requisitos.length - 3} mais
                                </span>
                              )}
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3 pt-2">
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-sans shadow-lg shadow-blue-500/20 border-0"
                              >
                                Candidatar-se
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="text-gray-400 hover:text-white hover:bg-white/5 font-sans"
                              >
                                Ver detalhes
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {vagasFiltradas.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-20"
                >
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-blue-500/20 blur-3xl"></div>
                    <div className="relative w-24 h-24 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Briefcase className="h-12 w-12 text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-sans">
                    Nenhuma vaga encontrada
                  </h3>
                  <p className="text-gray-400 font-sans">
                    Tente ajustar seus filtros de busca
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
