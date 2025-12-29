import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer () {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="#home" className="text-2xl font-display font-bold text-gradient-primary">
              Portfolio
            </a>

            <div className="flex items-center gap-6">
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

            <p className="text-muted-foreground text-sm flex items-center gap-1">
              &copy; <span> {currentYear} </span> FLAMES Inc. Todos os direitos reservados &reg;
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
