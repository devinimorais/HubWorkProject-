import React from "react";
import HubWorkSidebar from "@/components/HubWorkSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HubWorkDemo: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <HubWorkSidebar />

      {/* Main Content Area - O margin-left será ajustado automaticamente pela sidebar */}
      <main className="flex-1 p-4 lg:p-8 transition-all duration-300">
        <div className="max-w-6xl mx-auto space-y-6 pt-16 lg:pt-0">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-white font-sans">Bem-vindo ao HubWork</h1>
            <p className="text-lg text-gray-400 font-sans">
              Sua plataforma completa para encontrar oportunidades de trabalho
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-950 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white font-sans">Vagas Recentes</CardTitle>
                <CardDescription className="text-gray-400 font-sans">
                  125 novas vagas adicionadas hoje
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 font-sans">
                  Explore as oportunidades mais recentes em sua região
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-950 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white font-sans">Currículos Enviados</CardTitle>
                <CardDescription className="text-gray-400 font-sans">
                  Você enviou 12 currículos este mês
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 font-sans">
                  Acompanhe o status das suas candidaturas
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-950 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white font-sans">Cursos Disponíveis</CardTitle>
                <CardDescription className="text-gray-400 font-sans">
                  50+ cursos gratuitos para você
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 font-sans">
                  Aprimore suas habilidades com nossos cursos
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-950 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white font-sans">Sobre o HubWork</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 font-sans">
                O HubWork é uma plataforma completa dedicada a auxiliar pessoas desempregadas a
                encontrarem colocação no mercado de trabalho. Nossa missão é facilitar o acesso
                a oportunidades e fornecer ferramentas para o desenvolvimento profissional.
              </p>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white font-sans">Principais Recursos:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300 font-sans">
                  <li>Gerador de currículo profissional com exportação em PDF</li>
                  <li>Filtros avançados por região e área de atuação</li>
                  <li>Banco de empregos atualizado diariamente</li>
                  <li>Testes de aptidão para identificar suas habilidades</li>
                  <li>Ferramentas de descoberta de carreira</li>
                  <li>Cursos gratuitos de capacitação profissional</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default HubWorkDemo;
