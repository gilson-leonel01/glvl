import { useState } from "react";
import { Mail, MessageCircle, Phone, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "O nome é obrigatório.").max(100, "O nome deve ter menos de 100 caracteres."),
  email: z.string().trim().email("Por favor, insira um e-mail válido.").max(255, "O e-mail deve ter menos de 255 caracteres."),
  phone: z.string().trim().min(1, "É necessário um número de telefone.").max(20, "O número de telefone deve ter menos de 20 caracteres."),
  message: z.string().trim().min(1, "É necessário enviar uma mensagem.").max(1000, "A mensagem deve ter menos de 1000 caracteres."),
});

export default function Contact () {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      toast({
        title: "Erro de validação",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    const mailtoUrl = `mailto:gilson.leonel05@gmail.com?subject=${encodeURIComponent(`Solicitação de projeto de ${formData.name}`)}&body=${encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\n\nMensagem:\n${formData.message}`)}`;
    
    window.location.href = mailtoUrl;
    
    toast({
      title: "Abrindo o e-mail...",
      description: "Seu aplicativo de e-mail padrão deve abrir agora.",
    });
    
    setIsSubmitting(false);
  };

  const handleWhatsAppSubmit = () => {
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      toast({
        title: "Erro de validação",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    const whatsappMessage = `Olá! Eu sou ${formData.name}.\n\nEmail: ${formData.email}\nTelefone: ${formData.phone}\n\nDetalhes do projeto:\n${formData.message}`;
    const whatsappUrl = `https://wa.me/+244944704591?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Abrindo o WhatsApp...",
      description: "Você será redirecionado para o WhatsApp.",
    });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Entre em contato</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Vamos trabalhar juntos.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tem algum projeto em mente? Adoraria saber mais sobre ele. Preencha o formulário abaixo e entrarei em contato o mais breve possível.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-display font-bold text-foreground">
                Informações de contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Email</p>
                    <a href="mailto:gilson.leonel05@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      gilson.leonel05@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Telefone</p>
                    <a href="tel:+244944704591" className="text-muted-foreground hover:text-primary transition-colors">
                      +244 (944) 704-591
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Localização</p>
                    <p className="text-muted-foreground">Luanda, AO</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-muted-foreground mb-4">
                  Prefere um bate-papo rápido? Envie-me uma mensagem diretamente pelo WhatsApp!
                </p>
                <Button variant="accent" size="lg" onClick={handleWhatsAppSubmit}>
                  <MessageCircle size={20} />
                  Mensagem no WhatsApp
                </Button>
              </div>
            </div>

            <div className="bg-gradient-card border border-border/50 rounded-2xl p-8">
              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-foreground font-medium mb-2">
                    Nome completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-foreground font-medium mb-2">
                    Endereço de email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={255}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-foreground font-medium mb-2">
                    Número de telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+0 (123) 456-789"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    maxLength={20}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-foreground font-medium mb-2">
                    Descrição do projeto
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Fale-me sobre o seu projeto..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={1000}
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  <Send size={20} />
                  Enviar por e-mail
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
