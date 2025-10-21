import React, { useState } from "react";
import {
  Award,
  Compass,
  Briefcase,
  GraduationCap,
  Menu,
  ChevronRight,
  ChevronLeft,
  LogOut,
  FilePlus2,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface MenuItemData {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const menuItems: MenuItemData[] = [
  {
    icon: <Compass className="h-5 w-5" />,
    label: "Início",
    path: "/home",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    label: "Vagas",
    path: "/vagas",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    label: "Cursos",
    path: "/cursos",
  },
  {
    icon: <FilePlus2 className="h-5 w-5" />,
    label: "Gerar Currículo",
    path: "/gerador-curriculo",
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "Meu Perfil",
    path: "/perfil",
  },
  {
    icon: <Award className="h-5 w-5" />,
    label: "Dashboard",
    path: "/dashboard",
  },
];

interface SidebarContentProps {
  isOpen: boolean;
  onToggle: () => void;
}

const SidebarContent: React.FC<SidebarContentProps> = ({ isOpen, onToggle }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col h-full bg-gray-950 text-white font-sans">
      {/* Header */}
      <div className="p-6 flex items-center justify-between">
        {isOpen && (
          <h1 className="text-2xl font-bold tracking-tight font-sans">
            HubWork
          </h1>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="text-gray-400 hover:text-white hover:bg-gray-900 ml-auto"
        >
          {isOpen ? (
            <ChevronLeft className="h-5 w-5" />
          ) : (
            <ChevronRight className="h-5 w-5" />
          )}
        </Button>
      </div>

      <Separator className="bg-gray-800" />

      {/* Menu Items */}
      <ScrollArea className="flex-1 px-3 py-4">
        <div className="space-y-1">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              onClick={() => navigate(item.path)}
              className={`w-full justify-start gap-3 py-3 px-4 text-gray-300 hover:bg-gray-900 hover:text-white transition-all font-sans ${
                isOpen ? "" : "px-2 justify-center"
              }`}
            >
              <div className="flex-shrink-0">{item.icon}</div>
              {isOpen && <span className="text-sm font-medium">{item.label}</span>}
            </Button>
          ))}
        </div>
      </ScrollArea>

      <Separator className="bg-gray-800" />

      {/* Footer with Logout */}
      <div className="p-3">
        <Button
          variant="ghost"
          onClick={handleLogout}
          className={`w-full justify-start gap-3 py-3 px-4 text-red-400 hover:bg-red-950 hover:text-red-300 transition-all font-sans ${
            isOpen ? "" : "px-2 justify-center"
          }`}
        >
          <div className="flex-shrink-0">
            <LogOut className="h-5 w-5" />
          </div>
          {isOpen && <span className="text-sm font-medium">Sair</span>}
        </Button>
      </div>
    </div>
  );
};

const HubWorkSidebar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktopOpen, setIsDesktopOpen] = useState(true);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-[60]">
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="bg-gray-950 border-gray-800 text-white hover:bg-gray-900 hover:text-gray-200 font-sans"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64 bg-gray-950 border-gray-800 z-[60]">
            <SidebarContent isOpen={true} onToggle={() => setIsMobileOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex fixed left-0 top-0 h-screen border-r border-gray-800 transition-all duration-300 z-[60] ${
          isDesktopOpen ? "w-64" : "w-20"
        }`}
      >
        <SidebarContent isOpen={isDesktopOpen} onToggle={() => setIsDesktopOpen(!isDesktopOpen)} />
      </aside>

      {/* Botão de abrir quando sidebar está fechada (apenas desktop) */}
      {!isDesktopOpen && (
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsDesktopOpen(true)}
          className="hidden lg:flex fixed left-4 top-4 z-[60] bg-gray-950 border-gray-800 text-white hover:bg-gray-900"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      )}
    </>
  );
};

export default HubWorkSidebar;
