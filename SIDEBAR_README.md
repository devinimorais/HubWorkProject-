# SidebarHubWork

Componente de sidebar responsiva e elegante para o HubWork, plataforma de vagas de emprego e capacitação profissional.

## Características

- **Design Moderno**: Tema escuro (gray-950) com elementos visuais elegantes
- **Totalmente Responsivo**: Menu hamburger para mobile, sidebar fixa para desktop
- **Componentes Shadcn UI**: Button, ScrollArea, Separator, Tooltip
- **Ícones Lucide React**: Ícones modernos e consistentes
- **Animações Suaves**: Transições e hover effects
- **TypeScript**: Tipagem completa para maior segurança

## Estrutura

### Itens da Sidebar

1. **Currículo** - Gerar e baixar
2. **Região** - Filtrar empregos
3. **Encaminhar** - Enviar currículo
4. **Aptidão** - Teste de habilidades
5. **Carreira** - Descobrir caminhos
6. **Busca** - Procurar vagas
7. **Empregos** - Ofertas disponíveis
8. **Cursos** - Gratuitos

## Como Usar

### Importação

```tsx
import { SidebarHubWork } from '@/components/SidebarHubWork'
```

### Uso Básico

```tsx
export function MyPage() {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <SidebarHubWork />

      <main className="flex-1 lg:ml-64 p-8">
        {/* Seu conteúdo aqui */}
      </main>
    </div>
  )
}
```

### Adicionando Ações aos Itens

Para adicionar funcionalidade aos itens da sidebar, edite o array `sidebarItems` no componente:

```tsx
const sidebarItems: SidebarItem[] = [
  {
    icon: FileText,
    label: 'Currículo',
    description: 'Gerar e baixar',
    onClick: () => {
      // Sua lógica aqui
      console.log('Abrindo gerador de currículo')
    }
  },
  // ... outros itens
]
```

## Personalização

### Cores

O tema usa as seguintes cores do Tailwind:

- Background: `bg-gray-950`
- Texto principal: `text-white`
- Texto secundário: `text-gray-400`
- Bordas: `border-gray-800`
- Hover: `hover:bg-gray-900`

### Largura

A sidebar tem largura fixa de `w-64` (256px). Para alterar:

```tsx
<aside className="w-64"> {/* Altere aqui */}
```

E ajuste o margin-left do conteúdo principal:

```tsx
<main className="lg:ml-64"> {/* Altere para corresponder */}
```

## Responsividade

- **Mobile (< 1024px)**: Menu hamburger no canto superior esquerdo
- **Desktop (>= 1024px)**: Sidebar fixa à esquerda

## Acessar a Demo

Execute o projeto e acesse:

```
http://localhost:5173/hubwork
```

## Tecnologias

- React 18
- TypeScript
- Tailwind CSS
- Shadcn UI
- Lucide React
- React Router DOM

## Estrutura de Arquivos

```
src/
├── components/
│   ├── SidebarHubWork.tsx       # Componente principal
│   └── ui/                      # Componentes Shadcn UI
│       ├── button.tsx
│       ├── scroll-area.tsx
│       ├── separator.tsx
│       └── tooltip.tsx
└── page/
    └── HubWorkDemo.tsx          # Página de demonstração
```

## Licença

© 2025 HubWork
