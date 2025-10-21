import { useState } from 'react'
import {
  FileText,
  MapPin,
  Send,
  Award,
  TrendingUp,
  Search,
  Briefcase,
  BookOpen,
  Menu,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

interface SidebarItem {
  icon: React.ElementType
  label: string
  onClick?: () => void
}

export function SidebarHubWork() {
  const [isOpen, setIsOpen] = useState(false)

  const sidebarItems: SidebarItem[] = [
    {
      icon: FileText,
      label: 'Currículo',
    },
    {
      icon: MapPin,
      label: 'Região',
    },
    {
      icon: Send,
      label: 'Encaminhar',
    },
    {
      icon: Award,
      label: 'Aptidão',
    },
    {
      icon: TrendingUp,
      label: 'Carreira',
    },
    {
      icon: Search,
      label: 'Busca',
    },
    {
      icon: Briefcase,
      label: 'Empregos',
    },
    {
      icon: BookOpen,
      label: 'Cursos',
    },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-gray-900 hover:bg-gray-800 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Overlay para mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-gray-950 border-r border-gray-800
          flex flex-col z-40 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            HubWork
          </h1>
        </div>

        {/* Navigation Items */}
        <ScrollArea className="flex-1 px-3 py-4">
          <nav className="space-y-1">
            {sidebarItems.map((item, index) => {
              const Icon = item.icon
              return (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-900 transition-colors group"
                  onClick={item.onClick}
                >
                  <Icon className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{item.label}</span>
                </Button>
              )
            })}
          </nav>
        </ScrollArea>

        <Separator className="bg-gray-800" />

        {/* Footer */}
      </aside>
    </>
  )
}
