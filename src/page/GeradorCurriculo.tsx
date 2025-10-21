import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import HubWorkSidebar from "@/components/HubWorkSidebar";
import { motion } from "framer-motion";
import {
  FileText,
  User,
  Briefcase,
  GraduationCap,
  Award,
  Plus,
  Trash2,
  Download,
  Sparkles,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface DadosPessoais {
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  objetivo: string;
}

interface Experiencia {
  id: string;
  cargo: string;
  empresa: string;
  periodo: string;
  descricao: string;
}

interface Formacao {
  id: string;
  curso: string;
  instituicao: string;
  periodo: string;
}

interface Habilidade {
  id: string;
  nome: string;
}

export default function GeradorCurriculo() {
  const [step, setStep] = useState(1);
  const [dadosPessoais, setDadosPessoais] = useState<DadosPessoais>({
    nome: "Francisco Andrade",
    email: "ola@grandesite.com.br",
    telefone: "(12) 3456-7890",
    endereco: "Analista de Sistemas Sênior",
    objetivo: "Meu principal objetivo é compreender as necessidades dos usuários e da empresa, com o intuito de projetar e implementar sistemas de informação eficientes que atendam às necessidades do negócio."
  });

  const [experiencias, setExperiencias] = useState<Experiencia[]>([
    {
      id: "1",
      cargo: "Suporte Técnico",
      empresa: "Borcelle Tecnologia",
      periodo: "2010 - 2015",
      descricao: ""
    },
    {
      id: "2",
      cargo: "Analista de Sistemas",
      empresa: "Empresa Faustino de Tecnologia",
      periodo: "2015 - 2018",
      descricao: ""
    },
    {
      id: "3",
      cargo: "Analista de Sistemas Sênior",
      empresa: "Lia e Cia Tecnologia",
      periodo: "2018 - Atual",
      descricao: ""
    }
  ]);

  const [formacoes, setFormacoes] = useState<Formacao[]>([
    {
      id: "1",
      curso: "Sistemas da Informação",
      instituicao: "Faculdade Borcelle de Tecnologia",
      periodo: "2010 - 2014"
    },
    {
      id: "2",
      curso: "Engenharia de Software",
      instituicao: "Instituto Faustino de Educação",
      periodo: "2018 - 2021"
    }
  ]);

  const [habilidades, setHabilidades] = useState<Habilidade[]>([
    { id: "1", nome: "" }
  ]);

  const adicionarExperiencia = () => {
    setExperiencias([...experiencias, {
      id: Date.now().toString(),
      cargo: "",
      empresa: "",
      periodo: "",
      descricao: ""
    }]);
  };

  const removerExperiencia = (id: string) => {
    setExperiencias(experiencias.filter(exp => exp.id !== id));
  };

  const adicionarFormacao = () => {
    setFormacoes([...formacoes, {
      id: Date.now().toString(),
      curso: "",
      instituicao: "",
      periodo: ""
    }]);
  };

  const removerFormacao = (id: string) => {
    setFormacoes(formacoes.filter(form => form.id !== id));
  };

  const adicionarHabilidade = () => {
    setHabilidades([...habilidades, { id: Date.now().toString(), nome: "" }]);
  };

  const removerHabilidade = (id: string) => {
    setHabilidades(habilidades.filter(hab => hab.id !== id));
  };

  const gerarPDF = async () => {
    const elemento = document.getElementById("curriculo-preview");
    if (!elemento) return;

    const canvas = await html2canvas(elemento, {
      scale: 2,
      backgroundColor: "#ffffff",
      logging: false
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4"
    });

    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save(`curriculo-${dadosPessoais.nome || 'profissional'}.pdf`);
  };

  const steps = [
    { number: 1, title: "Dados Pessoais", icon: User },
    { number: 2, title: "Experiência", icon: Briefcase },
    { number: 3, title: "Formação", icon: GraduationCap },
    { number: 4, title: "Habilidades", icon: Award }
  ];

  return (
    <div className="flex min-h-screen w-full bg-[#030712]">
      <HubWorkSidebar />

      <main className="flex-1 lg:pl-80 pt-16 lg:pt-0 relative">
        {/* Animated background */}
        <div className="fixed inset-0 lg:left-80 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
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
                  <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <FileText className="w-10 h-10 text-cyan-400" />
                  </div>
                </motion.div>
                <div>
                  <h1 className="text-3xl font-bold text-white font-sans tracking-tight">Gerador de Currículo</h1>
                  <p className="text-sm text-gray-400 font-sans mt-1">Crie seu currículo profissional em minutos</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="p-6">
            {/* Progress Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center gap-4">
                {steps.map((s, index) => (
                  <div key={s.number} className="flex items-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      onClick={() => setStep(s.number)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
                        step === s.number
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                          : "bg-white/5 text-gray-400 hover:bg-white/10"
                      }`}
                    >
                      <s.icon className="h-5 w-5" />
                      <span className="font-sans font-medium hidden sm:inline">{s.title}</span>
                    </motion.div>
                    {index < steps.length - 1 && (
                      <div className="w-8 h-0.5 bg-white/10 mx-2"></div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Form Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="bg-white/[0.02] backdrop-blur-sm border-white/10">
                  <CardContent className="p-6">
                    {/* Step 1: Dados Pessoais */}
                    {step === 1 && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="relative">
                            <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full"></div>
                            <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center">
                              <User className="h-5 w-5 text-cyan-400" />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-white font-sans">Dados Pessoais</h3>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-gray-300 font-sans text-sm">Nome Completo</Label>
                          <Input
                            value={dadosPessoais.nome}
                            onChange={(e) => setDadosPessoais({...dadosPessoais, nome: e.target.value})}
                            className="bg-white/5 border-white/10 text-white font-sans focus:border-cyan-500/50 h-11"
                            placeholder="Seu nome completo"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label className="text-gray-300 font-sans text-sm">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              value={dadosPessoais.email}
                              onChange={(e) => setDadosPessoais({...dadosPessoais, email: e.target.value})}
                              className="pl-10 bg-white/5 border-white/10 text-white font-sans focus:border-cyan-500/50 h-11"
                              placeholder="seu@email.com"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-gray-300 font-sans text-sm">Telefone</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              value={dadosPessoais.telefone}
                              onChange={(e) => setDadosPessoais({...dadosPessoais, telefone: e.target.value})}
                              className="pl-10 bg-white/5 border-white/10 text-white font-sans focus:border-cyan-500/50 h-11"
                              placeholder="(11) 99999-9999"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-gray-300 font-sans text-sm">Cargo Atual</Label>
                          <div className="relative">
                            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              value={dadosPessoais.endereco}
                              onChange={(e) => setDadosPessoais({...dadosPessoais, endereco: e.target.value})}
                              className="pl-10 bg-white/5 border-white/10 text-white font-sans focus:border-cyan-500/50 h-11"
                              placeholder="Seu cargo atual"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-gray-300 font-sans text-sm">Objetivo Profissional</Label>
                          <Textarea
                            value={dadosPessoais.objetivo}
                            onChange={(e) => setDadosPessoais({...dadosPessoais, objetivo: e.target.value})}
                            className="bg-white/5 border-white/10 text-white font-sans focus:border-cyan-500/50 min-h-[100px]"
                            placeholder="Descreva seu objetivo profissional..."
                          />
                        </div>

                        <Button
                          onClick={() => setStep(2)}
                          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-sans h-11 mt-6"
                        >
                          Próximo
                        </Button>
                      </div>
                    )}

                    {/* Step 2: Experiência */}
                    {step === 2 && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full"></div>
                              <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center">
                                <Briefcase className="h-5 w-5 text-cyan-400" />
                              </div>
                            </div>
                            <h3 className="text-xl font-bold text-white font-sans">Experiência Profissional</h3>
                          </div>
                          <Button
                            onClick={adicionarExperiencia}
                            size="sm"
                            className="bg-white/5 hover:bg-white/10 text-white border border-white/10"
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Adicionar
                          </Button>
                        </div>

                        <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2">
                          {experiencias.map((exp, index) => (
                            <div key={exp.id} className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-400 font-sans">Experiência {index + 1}</span>
                                {experiencias.length > 1 && (
                                  <Button
                                    onClick={() => removerExperiencia(exp.id)}
                                    size="sm"
                                    variant="ghost"
                                    className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>

                              <Input
                                value={exp.cargo}
                                onChange={(e) => {
                                  const newExps = [...experiencias];
                                  newExps[index].cargo = e.target.value;
                                  setExperiencias(newExps);
                                }}
                                className="bg-white/5 border-white/10 text-white font-sans h-10"
                                placeholder="Cargo"
                              />

                              <Input
                                value={exp.empresa}
                                onChange={(e) => {
                                  const newExps = [...experiencias];
                                  newExps[index].empresa = e.target.value;
                                  setExperiencias(newExps);
                                }}
                                className="bg-white/5 border-white/10 text-white font-sans h-10"
                                placeholder="Empresa"
                              />

                              <Input
                                value={exp.periodo}
                                onChange={(e) => {
                                  const newExps = [...experiencias];
                                  newExps[index].periodo = e.target.value;
                                  setExperiencias(newExps);
                                }}
                                className="bg-white/5 border-white/10 text-white font-sans h-10"
                                placeholder="Período (ex: Jan 2020 - Dez 2022)"
                              />

                              <Textarea
                                value={exp.descricao}
                                onChange={(e) => {
                                  const newExps = [...experiencias];
                                  newExps[index].descricao = e.target.value;
                                  setExperiencias(newExps);
                                }}
                                className="bg-white/5 border-white/10 text-white font-sans min-h-[80px]"
                                placeholder="Descrição das atividades..."
                              />
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-3 mt-6">
                          <Button
                            onClick={() => setStep(1)}
                            variant="outline"
                            className="flex-1 border-white/10 text-white hover:bg-white/5"
                          >
                            Voltar
                          </Button>
                          <Button
                            onClick={() => setStep(3)}
                            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-sans"
                          >
                            Próximo
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Formação */}
                    {step === 3 && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full"></div>
                              <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center">
                                <GraduationCap className="h-5 w-5 text-cyan-400" />
                              </div>
                            </div>
                            <h3 className="text-xl font-bold text-white font-sans">Formação Acadêmica</h3>
                          </div>
                          <Button
                            onClick={adicionarFormacao}
                            size="sm"
                            className="bg-white/5 hover:bg-white/10 text-white border border-white/10"
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Adicionar
                          </Button>
                        </div>

                        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                          {formacoes.map((form, index) => (
                            <div key={form.id} className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-400 font-sans">Formação {index + 1}</span>
                                {formacoes.length > 1 && (
                                  <Button
                                    onClick={() => removerFormacao(form.id)}
                                    size="sm"
                                    variant="ghost"
                                    className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>

                              <Input
                                value={form.curso}
                                onChange={(e) => {
                                  const newForms = [...formacoes];
                                  newForms[index].curso = e.target.value;
                                  setFormacoes(newForms);
                                }}
                                className="bg-white/5 border-white/10 text-white font-sans h-10"
                                placeholder="Curso"
                              />

                              <Input
                                value={form.instituicao}
                                onChange={(e) => {
                                  const newForms = [...formacoes];
                                  newForms[index].instituicao = e.target.value;
                                  setFormacoes(newForms);
                                }}
                                className="bg-white/5 border-white/10 text-white font-sans h-10"
                                placeholder="Instituição"
                              />

                              <Input
                                value={form.periodo}
                                onChange={(e) => {
                                  const newForms = [...formacoes];
                                  newForms[index].periodo = e.target.value;
                                  setFormacoes(newForms);
                                }}
                                className="bg-white/5 border-white/10 text-white font-sans h-10"
                                placeholder="Período (ex: 2018 - 2022)"
                              />
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-3 mt-6">
                          <Button
                            onClick={() => setStep(2)}
                            variant="outline"
                            className="flex-1 border-white/10 text-white hover:bg-white/5"
                          >
                            Voltar
                          </Button>
                          <Button
                            onClick={() => setStep(4)}
                            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-sans"
                          >
                            Próximo
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Habilidades */}
                    {step === 4 && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full"></div>
                              <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center">
                                <Award className="h-5 w-5 text-cyan-400" />
                              </div>
                            </div>
                            <h3 className="text-xl font-bold text-white font-sans">Habilidades</h3>
                          </div>
                          <Button
                            onClick={adicionarHabilidade}
                            size="sm"
                            className="bg-white/5 hover:bg-white/10 text-white border border-white/10"
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Adicionar
                          </Button>
                        </div>

                        <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                          {habilidades.map((hab, index) => (
                            <div key={hab.id} className="flex items-center gap-3">
                              <Input
                                value={hab.nome}
                                onChange={(e) => {
                                  const newHabs = [...habilidades];
                                  newHabs[index].nome = e.target.value;
                                  setHabilidades(newHabs);
                                }}
                                className="bg-white/5 border-white/10 text-white font-sans h-10"
                                placeholder="Nome da habilidade"
                              />
                              {habilidades.length > 1 && (
                                <Button
                                  onClick={() => removerHabilidade(hab.id)}
                                  size="sm"
                                  variant="ghost"
                                  className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-3 mt-6">
                          <Button
                            onClick={() => setStep(3)}
                            variant="outline"
                            className="flex-1 border-white/10 text-white hover:bg-white/5"
                          >
                            Voltar
                          </Button>
                          <Button
                            onClick={gerarPDF}
                            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-sans"
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Gerar PDF
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Preview Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="bg-white/[0.02] backdrop-blur-sm border-white/10 sticky top-24">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Sparkles className="h-5 w-5 text-cyan-400" />
                      <h3 className="text-xl font-bold text-white font-sans">Preview do Currículo</h3>
                    </div>

                    {/* Curriculo Preview */}
                    <div
                      id="curriculo-preview"
                      className="bg-white p-10 rounded-lg shadow-2xl min-h-[600px]"
                      style={{ fontFamily: 'Arial, sans-serif' }}
                    >
                      {/* Header do Curriculo */}
                      <div className="text-center border-b-4 border-gray-900 pb-6 mb-6">
                        <h1 className="text-4xl font-bold text-gray-900 mb-2 uppercase tracking-wide">
                          {dadosPessoais.nome || "Seu Nome"}
                        </h1>
                        {dadosPessoais.endereco && (
                          <p className="text-lg text-gray-700 font-semibold mb-3">
                            {dadosPessoais.endereco}
                          </p>
                        )}
                        <div className="flex justify-center flex-wrap gap-4 text-sm text-gray-600">
                          {dadosPessoais.telefone && (
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4" />
                              <span>{dadosPessoais.telefone}</span>
                            </div>
                          )}
                          {dadosPessoais.email && (
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4" />
                              <span>{dadosPessoais.email}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Objetivo */}
                      {dadosPessoais.objetivo && (
                        <div className="mb-6">
                          <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase border-b-2 border-gray-300 pb-2">
                            Objetivo
                          </h2>
                          <p className="text-gray-700 text-sm leading-relaxed text-justify">
                            {dadosPessoais.objetivo}
                          </p>
                        </div>
                      )}

                      {/* Formacao */}
                      {formacoes.some(form => form.curso || form.instituicao) && (
                        <div className="mb-6">
                          <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase border-b-2 border-gray-300 pb-2">
                            Formação
                          </h2>
                          <div className="space-y-4">
                            {formacoes.filter(form => form.curso || form.instituicao).map((form) => (
                              <div key={form.id}>
                                <div className="flex items-start gap-3">
                                  <span className="text-sm font-bold text-gray-900 whitespace-nowrap">
                                    {form.periodo} |
                                  </span>
                                  <div>
                                    <p className="text-sm text-gray-700 font-semibold">{form.instituicao}</p>
                                    <p className="text-sm text-gray-600">Curso: {form.curso}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Experiencia */}
                      {experiencias.some(exp => exp.cargo || exp.empresa) && (
                        <div className="mb-6">
                          <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase border-b-2 border-gray-300 pb-2">
                            Experiências Profissionais
                          </h2>
                          <div className="space-y-4">
                            {experiencias.filter(exp => exp.cargo || exp.empresa).map((exp) => (
                              <div key={exp.id}>
                                <div className="flex items-start gap-3">
                                  <span className="text-sm font-bold text-gray-900 whitespace-nowrap">
                                    {exp.periodo} |
                                  </span>
                                  <div>
                                    <p className="text-sm text-gray-700 font-semibold">{exp.empresa}</p>
                                    <p className="text-sm text-gray-600">Cargo: {exp.cargo}</p>
                                    {exp.descricao && (
                                      <p className="text-sm text-gray-600 leading-relaxed mt-1">{exp.descricao}</p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Habilidades */}
                      {habilidades.some(hab => hab.nome) && (
                        <div>
                          <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase border-b-2 border-gray-300 pb-2">
                            Competências
                          </h2>
                          <div className="flex flex-wrap gap-2">
                            {habilidades.filter(hab => hab.nome).map((hab) => (
                              <span
                                key={hab.id}
                                className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm"
                              >
                                {hab.nome}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
