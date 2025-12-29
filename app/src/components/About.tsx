import { Code2, Handshake, Rocket, Users } from "lucide-react";

const stats = [
  { icon: Code2, value: "50+", label: "Projetos Concluídos" },
  { icon: Users, value: "30+", label: "Clientes satisfeitos" },
  { icon: Rocket, value: "5+", label: "Anos de experiência" },
  { icon: Handshake, value: "100%", label: "Satisfação do Cliente" },
];

export default function About () {
  return (
    <section id="about" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Sobre mim</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Transformando ideias em realidade
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sou um desenvolvedor criativo que adora construir experiências digitais excepcionais.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Com mais de 5 anos de experiência em desenvolvimento web, sou especializado na criação de aplicações responsivas e fáceis de usar, utilizando tecnologias modernas como React, TypeScript, Node.js, Java, Flutter e muito mais.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Acredito em escrever código limpo e de fácil manutenção, seguindo as melhores práticas para entregar soluções de alta qualidade. Minha abordagem combina conhecimento técnico com soluções criativas para dar vida à sua visão.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Quando não estou programando, você pode me encontrar explorando novas tecnologias, contribuindo para projetos de código aberto ou compartilhando conhecimento com a comunidade de desenvolvedores.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gradient-card rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                >
                  <stat.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-3xl font-display font-bold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
