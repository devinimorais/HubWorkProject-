import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import HubWorkSidebar from "@/components/HubWorkSidebar";
import { Search, Clock, Users, Award, Play, BookOpen, Zap, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

interface Curso {
  id: number;
  titulo: string;
  categoria: string;
  duracao: string;
  nivel: string;
  alunos: number;
  descricao: string;
  topicos: string[];
  instrutor: string;
  certificado: boolean;
}

const cursosData: Curso[] = [
  {
    id: 1,
    titulo: "Excel Básico ao Avançado",
    categoria: "Informática",
    duracao: "20 horas",
    nivel: "Iniciante",
    alunos: 1234,
    descricao: "Aprenda Excel do zero até fórmulas avançadas, tabelas dinâmicas e automação",
    topicos: ["Fórmulas básicas", "Tabelas dinâmicas", "Gráficos", "Macros"],
    instrutor: "Prof. João Silva",
    certificado: true,
  },
  {
    id: 2,
    titulo: "Atendimento ao Cliente",
    categoria: "Vendas",
    duracao: "12 horas",
    nivel: "Iniciante",
    alunos: 890,
    descricao: "Técnicas de atendimento, comunicação e resolução de conflitos",
    topicos: ["Comunicação efetiva", "Resolução de conflitos", "Técnicas de vendas", "Pós-venda"],
    instrutor: "Prof. Maria Santos",
    certificado: true,
  },
  {
    id: 3,
    titulo: "Auxiliar Administrativo",
    categoria: "Administração",
    duracao: "30 horas",
    nivel: "Iniciante",
    alunos: 2100,
    descricao: "Curso completo para trabalhar como auxiliar administrativo em empresas",
    topicos: ["Rotinas administrativas", "Gestão de documentos", "Comunicação empresarial", "Organização"],
    instrutor: "Prof. Carlos Oliveira",
    certificado: true,
  },
  {
    id: 4,
    titulo: "Elaboração de Currículos",
    categoria: "Desenvolvimento Pessoal",
    duracao: "4 horas",
    nivel: "Iniciante",
    alunos: 3450,
    descricao: "Aprenda a criar currículos profissionais que chamam atenção dos recrutadores",
    topicos: ["Estrutura do currículo", "Como destacar experiências", "Carta de apresentação", "Perfil no LinkedIn"],
    instrutor: "Prof. Ana Paula",
    certificado: true,
  },
  {
    id: 5,
    titulo: "Comunicação e Oratória",
    categoria: "Desenvolvimento Pessoal",
    duracao: "15 horas",
    nivel: "Intermediário",
    alunos: 1567,
    descricao: "Desenvolva habilidades de comunicação para entrevistas e ambiente profissional",
    topicos: ["Técnicas de apresentação", "Linguagem corporal", "Entrevistas de emprego", "Networking"],
    instrutor: "Prof. Roberto Lima",
    certificado: true,
  },
  {
    id: 6,
    titulo: "Informática Básica",
    categoria: "Informática",
    duracao: "25 horas",
    nivel: "Iniciante",
    alunos: 2890,
    descricao: "Fundamentos de informática, Windows, Word, PowerPoint e navegação na internet",
    topicos: ["Windows", "Word", "PowerPoint", "Internet", "E-mail"],
    instrutor: "Prof. Fernanda Costa",
    certificado: true,
  },
];

export default function Cursos() {
  const [busca, setBusca] = useState("");
  const [categoriaFilter, setCategoriaFilter] = useState("");

  const cursosFiltrados = cursosData.filter((curso) => {
    const matchBusca = curso.titulo.toLowerCase().includes(busca.toLowerCase()) ||
                       curso.descricao.toLowerCase().includes(busca.toLowerCase());
    const matchCategoria = categoriaFilter === "" || curso.categoria === categoriaFilter;
    return matchBusca && matchCategoria;
  });

  const categorias = Array.from(new Set(cursosData.map(c => c.categoria)));

  return (
    <div className="flex min-h-screen w-full bg-[#030712]">
      <HubWorkSidebar />

      <main className="flex-1 lg:pl-80 pt-16 lg:pt-0 relative">
        {/* Animated background elements */}
        <div className="fixed inset-0 lg:left-80 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
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
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full"></div>
                    <div className="relative w-14 h-14 bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <GraduationCap className="h-7 w-7 text-green-400" />
                    </div>
                  </motion.div>
                  <div>
                    <h1 className="text-3xl font-bold text-white font-sans tracking-tight">
                      Cursos Gratuitos
                    </h1>
                    <p className="text-sm text-gray-400 font-sans mt-1">
                      Capacite-se para o mercado de trabalho
                    </p>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="hidden md:flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full"
                >
                  <Zap className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-green-400 font-sans">100% Gratuito</span>
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
            <div className="space-y-4">
              {/* Search */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative group max-w-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 group-hover:text-green-400 transition-colors" />
                  <Input
                    placeholder="Buscar cursos..."
                    className="h-12 pl-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 font-sans focus:border-green-500/50 focus:bg-white/10 transition-all rounded-xl"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                  />
                </div>
              </motion.div>

              {/* Categories */}
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={categoriaFilter === "" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setCategoriaFilter("")}
                  className={
                    categoriaFilter === ""
                      ? "bg-gradient-to-r from-green-500 to-blue-500 text-white font-sans"
                      : "text-gray-400 hover:text-white hover:bg-white/5 font-sans"
                  }
                >
                  Todos
                </Button>
                {categorias.map((cat) => (
                  <Button
                    key={cat}
                    variant={categoriaFilter === cat ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setCategoriaFilter(cat)}
                    className={
                      categoriaFilter === cat
                        ? "bg-gradient-to-r from-green-500 to-blue-500 text-white font-sans"
                        : "text-gray-400 hover:text-white hover:bg-white/5 font-sans"
                    }
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Course Grid */}
          <div className="p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <p className="text-gray-400 font-sans text-sm">
                {cursosFiltrados.length} {cursosFiltrados.length === 1 ? "curso disponível" : "cursos disponíveis"}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {cursosFiltrados.map((curso, index) => (
                <motion.div
                  key={curso.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="group relative overflow-hidden bg-white/[0.02] backdrop-blur-sm border-white/10 hover:border-green-500/30 transition-all duration-300 h-full">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start gap-6">
                        {/* Icon Section */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="flex-shrink-0"
                        >
                          <div className="relative">
                            <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full"></div>
                            <div className="relative w-16 h-16 bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                              <BookOpen className="h-8 w-8 text-green-400" />
                            </div>
                          </div>
                        </motion.div>

                        {/* Content Section */}
                        <div className="flex-1 min-w-0">
                          {/* Header with badge and certificate */}
                          <div className="flex items-start justify-between mb-3">
                            <Badge className="bg-green-500/10 text-green-400 border-green-500/20 font-sans hover:bg-green-500/20 transition-colors">
                              {curso.categoria}
                            </Badge>
                            {curso.certificado && (
                              <motion.div
                                whileHover={{ scale: 1.2, rotate: 15 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <Award className="h-5 w-5 text-yellow-400" />
                              </motion.div>
                            )}
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-bold text-white mb-2 font-sans group-hover:text-green-400 transition-colors">
                            {curso.titulo}
                          </h3>

                          {/* Description */}
                          <p className="text-sm text-gray-400 mb-4 font-sans line-clamp-2">
                            {curso.descricao}
                          </p>

                          {/* Meta Info */}
                          <div className="flex flex-wrap gap-4 mb-4 text-xs text-gray-500">
                            <div className="flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5 text-green-400" />
                              <span className="font-sans">{curso.duracao}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Users className="h-3.5 w-3.5 text-green-400" />
                              <span className="font-sans">{curso.alunos.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Award className="h-3.5 w-3.5 text-green-400" />
                              <span className="font-sans">{curso.nivel}</span>
                            </div>
                          </div>

                          {/* Topics */}
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                              {curso.topicos.slice(0, 3).map((topico, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10 font-sans"
                                >
                                  {topico}
                                </span>
                              ))}
                              {curso.topicos.length > 3 && (
                                <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10 font-sans">
                                  +{curso.topicos.length - 3}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Instructor */}
                          <p className="text-xs text-gray-500 mb-4 font-sans">
                            {curso.instrutor}
                          </p>

                          {/* Action Button */}
                          <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-sans group/btn">
                            <Play className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                            Começar Curso
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {cursosFiltrados.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white/[0.02] backdrop-blur-sm border-white/10">
                  <CardContent className="p-12 text-center">
                    <div className="relative inline-block mb-4">
                      <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full"></div>
                      <BookOpen className="relative h-16 w-16 text-green-400 mx-auto" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 font-sans">
                      Nenhum curso encontrado
                    </h3>
                    <p className="text-gray-400 font-sans">
                      Tente ajustar seus filtros de busca
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
