import { ArrowDown, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useState } from "react";

export default function Hero () {
   const [showPhoto, setShowPhoto] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-medium mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Olá, eu sou
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-foreground">Gilson</span>{" "}
            <span className="text-gradient-primary">Leonel</span> <br />
          </h1>
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
           Desenvolvedor Full-Stack que transforma ideias em soluções digitais modernas e escaláveis.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">Ver meu trabalho</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">Entre em contato</a>
            </Button>
          </div>

          <div
            className="flex items-center justify-center gap-6 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="https://github.com/gilson-leonel01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/gilson-leonel01/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/gilson_leonel1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://x.com/Fuckin_Flames"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
