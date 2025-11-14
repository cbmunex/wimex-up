import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, User, Heart } from "lucide-react";
import { toast } from "sonner";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    paymentType: "monthly",
    agreeTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    if (!formData.agreeTerms) {
      toast.error("Você precisa concordar com os termos");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular envio do formulário
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Inscrição realizada com sucesso! Um consultor entrará em contato em breve.");
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        paymentType: "monthly",
        agreeTerms: false,
      });
    } catch (error) {
      toast.error("Erro ao enviar formulário. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white text-2xl">Comece Sua Jornada</CardTitle>
          <CardDescription className="text-gray-300">
            Preencha o formulário abaixo e um consultor entrará em contato para orientá-lo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Informações Pessoais */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <User className="w-5 h-5 text-orange-400" />
                Informações Pessoais
              </h3>

              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-200">
                  Nome Completo *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-200 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  WhatsApp/Telefone *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            {/* Opções de Pagamento */}
            <div className="space-y-4 border-t border-white/10 pt-6">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <Heart className="w-5 h-5 text-orange-400" />
                Escolha Seu Plano
              </h3>

              <Tabs value={formData.paymentType} onValueChange={(value) => setFormData(prev => ({ ...prev, paymentType: value }))}>
                <TabsList className="grid w-full grid-cols-2 bg-white/10">
                  <TabsTrigger value="monthly" className="data-[state=active]:bg-orange-500">
                    Mensal
                  </TabsTrigger>
                  <TabsTrigger value="lifetime" className="data-[state=active]:bg-orange-500">
                    Vitalício
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="monthly" className="space-y-3 mt-4">
                  <div className="bg-orange-500/20 border border-orange-500/50 rounded-lg p-4">
                    <p className="text-white font-semibold text-lg">
                      R$ 44,90/mês
                      <span className="text-sm text-gray-300 ml-2 line-through">R$ 89,90</span>
                    </p>
                    <p className="text-orange-300 text-sm mt-1">
                      ⚡ 50% de desconto para os 100 primeiros!
                    </p>
                    <p className="text-gray-300 text-sm mt-2">
                      • Acesso completo a todos os 20 módulos
                      • Avaliação de pronúncia em tempo real
                      • Suporte de consultor
                      • Cancele quando quiser
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="lifetime" className="space-y-3 mt-4">
                  <div className="bg-teal-500/20 border border-teal-500/50 rounded-lg p-4">
                    <p className="text-white font-semibold text-lg">
                      R$ 297,00
                      <span className="text-sm text-gray-300 ml-2 line-through">R$ 594,00</span>
                    </p>
                    <p className="text-teal-300 text-sm mt-1">
                      ⚡ 50% de desconto para os 100 primeiros!
                    </p>
                    <p className="text-gray-300 text-sm mt-2">
                      • Acesso vitalício (sem cancelamento)
                      • Todos os 20 módulos para sempre
                      • Atualizações futuras incluídas
                      • Suporte prioritário
                      • Melhor valor a longo prazo
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Termos */}
            <div className="space-y-4 border-t border-white/10 pt-6">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="terms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeTerms: checked as boolean }))}
                  className="mt-1"
                />
                <Label htmlFor="terms" className="text-gray-300 text-sm cursor-pointer">
                  Concordo com os termos de serviço e política de privacidade. Um consultor entrará em contato para confirmar sua inscrição.
                </Label>
              </div>
            </div>

            {/* Botão de Envio */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6 rounded-lg font-semibold"
            >
              {isSubmitting ? "Enviando..." : "Quero Começar Agora"}
            </Button>

            <p className="text-gray-400 text-sm text-center">
              Nenhum compromisso até falar com nosso consultor. Cancelamento sem taxas.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
