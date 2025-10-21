import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Lock, Mail, Github, Sparkles, ArrowRight, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#030712] p-4 font-sans relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Side - Branding */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-50 rounded-full"></div>
              <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-bold text-white leading-tight"
          >
            Transformando
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Vidas através do Trabalho
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Conectando pessoas em vulnerabilidade social com oportunidades reais de emprego.
            Juntos, construímos um futuro melhor.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-8 pt-4"
          >
            <div>
              <p className="text-3xl font-bold text-white">2,345+</p>
              <p className="text-sm text-gray-400">Pessoas Assistidas</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">1,234</p>
              <p className="text-sm text-gray-400">Vidas Transformadas</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-white/[0.03] backdrop-blur-xl border-white/10 shadow-2xl">
            <CardContent className="p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="inline-block mb-4"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-50 rounded-full"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl font-bold text-white mb-2"
                >
                  Bem-vindo de volta
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-400"
                >
                  Entre para continuar fazendo a diferença
                </motion.p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-2"
                >
                  <Label htmlFor="email" className="text-gray-300 font-sans">Email</Label>
                  <div className="relative group">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-11 h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 font-sans focus:border-blue-500/50 focus:bg-white/10 transition-all"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-gray-300 font-sans">Senha</Label>
                    <Button variant="link" className="px-0 h-auto text-xs text-gray-400 hover:text-blue-400" type="button">
                      Esqueceu?
                    </Button>
                  </div>
                  <div className="relative group">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-11 h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 font-sans focus:border-blue-500/50 focus:bg-white/10 transition-all"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center space-x-2"
                >
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 rounded border-white/20 bg-white/5 text-blue-500 focus:ring-blue-500 focus:ring-offset-0"
                  />
                  <Label htmlFor="remember" className="text-sm font-normal cursor-pointer text-gray-400 font-sans">
                    Lembrar-me neste dispositivo
                  </Label>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-sans text-base group"
                  >
                    Entrar na Plataforma
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </form>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="relative my-6"
              >
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-white/10" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-[#030712] px-3 text-gray-500 font-sans">
                    Ou continue com
                  </span>
                </div>
              </motion.div>

              {/* Social Login */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="grid grid-cols-2 gap-4"
              >
                <Button
                  variant="outline"
                  type="button"
                  className="h-11 bg-white/5 border-white/10 text-white hover:bg-white/10 font-sans"
                >
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                    <path
                      d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                      fill="currentColor"
                    />
                  </svg>
                  Google
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  className="h-11 bg-white/5 border-white/10 text-white hover:bg-white/10 font-sans"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Github
                </Button>
              </motion.div>

              {/* Footer */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-center text-sm text-gray-400 mt-6"
              >
                Não tem uma conta?{' '}
                <Button variant="link" className="px-1 h-auto text-blue-400 hover:text-blue-300 font-sans" type="button">
                  Cadastre-se gratuitamente
                </Button>
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
