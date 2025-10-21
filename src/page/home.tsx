import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Briefcase, Users, GraduationCap, Heart, Search, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  const navigate = useNavigate();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps"
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const features = [
    {
      icon: Briefcase,
      title: "Vagas Disponíveis",
      description: "Acesse centenas de oportunidades de emprego em diversas áreas",
      color: "text-blue-400",
      bgColor: "bg-blue-950/50",
    },
    {
      icon: GraduationCap,
      title: "Cursos Gratuitos",
      description: "Capacite-se com nossos cursos profissionalizantes sem custo",
      color: "text-green-400",
      bgColor: "bg-green-950/50",
    },
    {
      icon: Users,
      title: "Orientação Profissional",
      description: "Receba suporte e orientação durante todo o processo",
      color: "text-purple-400",
      bgColor: "bg-purple-950/50",
    },
    {
      icon: Heart,
      title: "Apoio Humanitário",
      description: "Projeto social focado em transformar vidas através do emprego",
      color: "text-red-400",
      bgColor: "bg-red-950/50",
    },
    {
      icon: Search,
      title: "Busca Personalizada",
      description: "Encontre vagas que combinam com seu perfil e experiência",
      color: "text-yellow-400",
      bgColor: "bg-yellow-950/50",
    },
    {
      icon: ArrowRight,
      title: "Encaminhamento Rápido",
      description: "Candidature-se rapidamente às melhores oportunidades",
      color: "text-cyan-400",
      bgColor: "bg-cyan-950/50",
    },
  ];

  const stats = [
    { value: "2.345+", label: "Pessoas Assistidas" },
    { value: "1.234", label: "Vidas Transformadas" },
    { value: "54", label: "Vagas Ativas" },
    { value: "23.8%", label: "Taxa de Sucesso" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#030712] via-gray-900 to-slate-800">
      {/* Navbar */}
      <nav className="border-b border-gray-800 bg-gray-950/50 backdrop-blur-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white font-sans">HubWork</h1>
          <div className="flex gap-4">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white font-sans"
              onClick={() => navigate("/")}
            >
              Entrar
            </Button>
            <Button
              className="bg-blue-600 hover:bg-blue-700 font-sans"
              onClick={() => navigate("/")}
            >
              Cadastre-se
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/50 border border-blue-800 rounded-full mb-6"
          >
            <Heart className="h-4 w-4 text-red-400" />
            <span className="text-sm text-gray-300 font-sans">Projeto de Impacto Social</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 font-sans"
          >
            Sua nova oportunidade
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
            >
              começa aqui
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto font-sans"
          >
            Conectamos pessoas em busca de emprego com oportunidades reais.
            Oferecemos capacitação gratuita e suporte completo para transformar sua vida.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-sans"
              onClick={() => navigate("/dashboard")}
            >
              <Search className="mr-2 h-5 w-5" />
              Buscar Vagas
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white font-sans"
              onClick={() => navigate("/dashboard")}
            >
              Conhecer Cursos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-gray-950/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                  className="text-3xl md:text-4xl font-bold text-white mb-2 font-sans"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-400 font-sans">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 overflow-hidden">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-sans">
              Como podemos ajudar você
            </h2>
            <p className="text-gray-400 text-lg font-sans">
              Oferecemos tudo que você precisa para conquistar um emprego
            </p>
          </motion.div>

          <div className="relative max-w-7xl mx-auto">
            {/* Carousel Container */}
            <div className="px-12 md:px-16">
              <div className="overflow-hidden rounded-xl" ref={emblaRef}>
                <div className="flex -ml-4">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={index}
                        className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                        style={{ transform: "translate3d(0, 0, 0)" }}
                      >
                        <div className="py-4">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.03, y: -8 }}
                            className="h-full"
                          >
                            <Card className={`bg-gray-950 border-gray-800 hover:border-gray-600 transition-all duration-300 h-full shadow-xl hover:shadow-2xl ${feature.bgColor}`}>
                              <CardHeader className="p-6 space-y-4">
                                <motion.div
                                  whileHover={{ rotate: 360, scale: 1.1 }}
                                  transition={{ duration: 0.6, type: "spring" }}
                                  className={`w-16 h-16 rounded-xl ${feature.bgColor} flex items-center justify-center border border-gray-700`}
                                >
                                  <Icon className={`h-8 w-8 ${feature.color}`} />
                                </motion.div>
                                <div>
                                  <CardTitle className="text-white font-sans text-xl mb-2">
                                    {feature.title}
                                  </CardTitle>
                                  <CardDescription className="text-gray-400 font-sans text-sm leading-relaxed">
                                    {feature.description}
                                  </CardDescription>
                                </div>
                              </CardHeader>
                            </Card>
                          </motion.div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              onClick={scrollPrev}
              variant="outline"
              size="icon"
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 border-gray-700 bg-gray-900/95 backdrop-blur text-gray-300 hover:bg-gray-800 hover:text-white hover:scale-110 transition-all z-10 shadow-lg"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              onClick={scrollNext}
              variant="outline"
              size="icon"
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 border-gray-700 bg-gray-900/95 backdrop-blur text-gray-300 hover:bg-gray-800 hover:text-white hover:scale-110 transition-all z-10 shadow-lg"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Mobile Navigation */}
            <div className="flex md:hidden justify-center gap-4 mt-6">
              <Button
                onClick={scrollPrev}
                variant="outline"
                size="sm"
                className="border-gray-700 bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Anterior
              </Button>
              <Button
                onClick={scrollNext}
                variant="outline"
                size="sm"
                className="border-gray-700 bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                Próximo
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="relative overflow-hidden bg-gradient-to-br from-[#030712] via-[#0a1120] to-[#111827] border-gray-700 shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

              <CardContent className="relative p-8 md:p-16 text-center">
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/50 border border-blue-800 rounded-full mb-6">
                    <Heart className="h-4 w-4 text-red-400" />
                    <span className="text-sm text-gray-300 font-sans">Comece Gratuitamente</span>
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-3xl md:text-5xl font-bold text-white mb-6 font-sans leading-tight"
                >
                  Pronto para{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    transformar sua vida?
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-sans leading-relaxed"
                >
                  Cadastre-se gratuitamente e comece sua jornada rumo ao emprego dos seus sonhos
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-sans shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg"
                    onClick={() => navigate("/")}
                  >
                    Começar Agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 font-sans px-8 py-6 text-lg"
                    onClick={() => navigate("/vagas")}
                  >
                    Ver Vagas
                    <Briefcase className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-400"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="font-sans">100% Gratuito</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="font-sans">Sem burocracia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="font-sans">Suporte total</span>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4 bg-gray-950">
        <div className="container mx-auto text-center text-gray-400">
          <p className="font-sans">© 2025 HubWork - Transformando vidas através do emprego</p>
        </div>
      </footer>
    </div>
  );
}
