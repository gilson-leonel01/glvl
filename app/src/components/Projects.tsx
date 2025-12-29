import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
import project6 from "@/assets/project-6.png";
import project7 from "@/assets/project-7.png";
import project8 from "@/assets/project-8.png";
import project9 from "@/assets/project-9.png";
import project10 from "@/assets/project-10.png";
import project11 from "@/assets/project-11.png";
import project12 from "@/assets/project-12.png";

const projects = [
  {
    id: 1,
    title: "Prae IA",
    description: "Uma plataforma baseada em Inteligência Artificial desenvolvida para auxiliar estudantes na elaboração de trabalhos acadêmicos, oferecendo suporte ético, personalizado e adaptado às normas institucionais.",
    image: project1,
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Zustand", "React Query", "Zod", "Lucide Icons", "Chart.js", "Stripe API"],
    liveUrl: "https://prae-ia.vercel.app/",
    githubUrl: "https://github.com/gilson-leonel01/prae_ia",
  },
  {
    id: 2,
    title: "Care App",
    description: "Aplicação web moderna para gerenciamento de cuidados de saúde, com foco em acompanhamento de pacientes, agendamentos, monitoramento de saúde e interface intuitiva para usuários e cuidadores.",
    image: project2,
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "Zod", "Redux Toolkit", "Firebase", "Auth0", "Radix UI"],
    liveUrl: "https://care-app-front-user.vercel.app/",
    githubUrl: "https://github.com/yuransimao/Care-app",
  },
  {
    id: 3,
    title: "Okutambula",
    description: "Plataforma fullstack moderna para compra, venda e aluguel de imóveis, com interface elegante, filtros avançados, animações fluidas e gerenciamento completo de propriedades.",
    image: project3,
    tags: ["Next.js 15", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Shadcn/UI", "Radix UI", "React Query", "Zod", "GSAP"],
    liveUrl: "https://okutambula-website.vercel.app/",
    githubUrl: "https://github.com/gilson-leonel01/okutambula_website/",
  },
  {
    id: 4,
    title: "Delícias Bovinas",
    description: "Aplicação web fullstack dedicada a celebrar a culinária premium de carne bovina, com seleção curada de receitas, cortes nobres, dicas de preparo, gerenciamento de menus e possibilidade de pedidos online para amantes de carne.",
    image: project4,
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "NestJS", "Prisma", "Redux Toolkit", "React Query", "Zod", "Framer Motion"],
    liveUrl: "https://delicias-bovinas.vercel.app/",
    githubUrl: "https://github.com/gilson-leonel01/delicias_bovinas/",
  },
  {
    id: 5,
    title: "Organizações Ritz Platform",
    description: "Sistema web fullstack para reservas de hotéis, lodges e acomodações da rede Organizações Ritz em Angola. Oferece busca personalizada, reservas online, gerenciamento de propriedades e uma experiência de usuário intuitiva para turistas e viajantes.",
    image: project5,
    tags: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "React Query", "Zod", "Auth0", "Google Maps API"],
    liveUrl: "#",
    githubUrl: "https://github.com/gilson-leonel01/organizacoes_ritz_platform/",
  },
  {
    id: 6,
    title: "Bio Links",
    description: "Página pessoal de links, elegante e responsiva, com modo dark/light, animação de digitação e integração com redes sociais. Centraliza todos os meus links importantes em um só lugar.",
    image: project6,
    tags: ["HTML5", "CSS3", "JavaScript", "Typed.js", "Ionicons", "Google Fonts", "Rocketseat Style"],
    liveUrl: "https://gilson-leonel01.github.io/biolinks/",
    githubUrl: "https://github.com/gilson-leonel01/biolinks/",
  },
  {
    id: 7,
    title: "Foodie - Desserts Sale",
    description: "Aplicação web fullstack para venda de sobremesas com operações CRUD completas. Gerencie estoque, vendas e relatórios de forma intuitiva, com manipulação de dados em tempo real e design atraente para uma experiência de compra deliciosa.",
    image: project7,
    tags: ["Java", "Servlets", "JSP", "JSF", "MVC", "MySQL", "Tailwind CSS", "React", "JavaScript", "Maven", "Apache Tomcat"],
    liveUrl: "https://foodie-website-fullstack.vercel.app/",
    githubUrl: "https://github.com/gilson-leonel01/foodie-website_fullstack/",
  },
  {
    
    id: 8,
    title: "Barbershop Management",
    description: "Um sistema completo de gestão para barbearias com app mobile e plataforma web, oferecendo agendamentos, gerenciamento de clientes, barbeiros e finanças.",
    image: project8,
    tags: ["React Native", "Expo", "Firebase", "Next.js", "Tailwind CSS", "TypeScript", "Prisma"],
    liveUrl: "#",
    githubUrl: "https://github.com/gilson-leonel01/fsw-barbershop_fullstack/",
  },
  {
    id: 9,
    title: "Habit Goal Tracker",
    description: "Um aplicativo móvel completo para gerenciamento de metas diárias, mensais e anuais, com listas de tarefas (to-do), timer Pomodoro integrado e rastreamento de progresso para aumentar a produtividade.",
    image: project9,
    tags: ["Flutter", "Dart", "Provider", "SQLite", "Riverpod"],
    liveUrl: "#",
    githubUrl: "https://github.com/gilson-leonel01/habit-tracker_app",
  },
  {
    id: 10,
    title: "Cook Recipe Generator",
    description: "Um aplicativo móvel em React Native para descobrir, gerar e salvar receitas deliciosas, com busca por ingredientes, instruções passo a passo, favoritos, lista de compras e animações suaves para uma experiência culinária incrível.",
    image: project10,
    tags: ["React Native", "Expo", "TypeScript", "React Navigation", "Animated API", "Async Storage", "API Recipes"],
    liveUrl: "#",
    githubUrl: "https://github.com/gilson-leonel01/cookrecipes_app",
  },
  {
    id: 11,
    title: "MyBank Pro",
    description: "Um aplicativo móvel moderno de banking digital desenvolvido em Flutter, com gerenciamento de contas, transferências instantâneas, pagamentos de contas, histórico de transações e autenticação segura via biometria.",
    image: project11,
    tags: ["Flutter", "Dart", "Provider", "Firebase", "Hive", "Biometric Auth", "Riverpod", "Animations"],
    liveUrl: "#",
    githubUrl: "https://github.com/gilson-leonel01/mobile-bank",
  },
  {
    id: 12,
    title: "Sistema de Gestão Escolar",
    description: "Um sistema desktop para gerenciar informações escolares, como cadastro de alunos, notas, turmas e professores. A aplicação permite o controle de desempenho acadêmico, geração de relatórios e possui uma interface gráfica intuitiva, garantindo uma gestão eficiente e organizada para escolas e instituições de ensino.",
    image: project12,
    tags: ["Java", "JavaFX", "MySQL", "Swing", "JDBC"],
    liveUrl: "https://github.com/gilson-leonel01/sisgest",
    githubUrl: "https://github.com/gilson-leonel01/registroEscolar",
  }
];

export default function Projects () {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Meu Trabalho</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Aqui estão alguns dos meus projetos recentes que demonstram minhas habilidades e paixão por desenvolvimento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group bg-gradient-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex gap-3">
                      <Button variant="hero" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          Demonstração ao vivo
                        </a>
                      </Button>
                      <Button variant="heroOutline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                          Código Fonte
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
