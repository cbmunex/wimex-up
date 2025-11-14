import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { trpc } from "@/lib/trpc";
import { Loader2, BookOpen, CheckCircle2, Clock } from "lucide-react";
import { useLocation } from "wouter";

export default function Dashboard() {
  const { user, loading: authLoading } = useAuth();
  const [, setLocation] = useLocation();

  // Fetch módulos básicos e intermediários
  const { data: basicModules, isLoading: basicLoading } = trpc.course.getModulesByLevel.useQuery("basic");
  const { data: intermediateModules, isLoading: intermediateLoading } = trpc.course.getModulesByLevel.useQuery("intermediate");
  const { data: userProgress } = trpc.progress.getAllProgress.useQuery(undefined, { enabled: !!user?.id });

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="animate-spin w-8 h-8" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Acesso Necessário</CardTitle>
            <CardDescription>Você precisa fazer login para acessar o curso</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => setLocation("/login")} className="w-full">
              Fazer Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getProgressPercentage = (moduleId: number) => {
    const moduleProgress = userProgress?.filter(p => p.moduleId === moduleId) || [];
    return moduleProgress.length > 0 ? 100 : 0;
  };

  const renderModuleCard = (module: any) => {
    const progress = getProgressPercentage(module.id);
    const isCompleted = progress === 100;

    return (
      <Card key={module.id} className="cursor-pointer hover:shadow-lg transition-shadow bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15" onClick={() => setLocation(`/module/${module.id}`)}>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-lg text-white">
                {module.moduleNumber}. {module.title}
              </CardTitle>
              <CardDescription className="mt-2 text-gray-300">{module.description}</CardDescription>
            </div>
            {isCompleted && <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 ml-2" />}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-300">
              <BookOpen className="w-4 h-4 mr-2" />
              Progresso: {progress}%
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div
                className="bg-orange-500 h-2 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-400">{progress}% Completo</p>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-800">
      <div className="container mx-auto py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white">Bem-vindo, {user.name || "Aluno"}!</h1>
          <p className="text-gray-300 mt-2">Escolha um módulo para começar a aprender inglês</p>
        </div>

        {/* Tabs para Básico e Intermediário */}
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="basic">Nível Básico</TabsTrigger>
            <TabsTrigger value="intermediate">Nível Intermediário</TabsTrigger>
          </TabsList>

          {/* Nível Básico */}
          <TabsContent value="basic" className="space-y-6 mt-6">
            {basicLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="animate-spin w-8 h-8" />
              </div>
            ) : basicModules && basicModules.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {basicModules.map(renderModuleCard)}
              </div>
            ) : (
              <Card>
                <CardContent className="py-8 text-center text-muted-foreground">
                  Nenhum módulo básico disponível no momento
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Nível Intermediário */}
          <TabsContent value="intermediate" className="space-y-6 mt-6">
            {intermediateLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="animate-spin w-8 h-8" />
              </div>
            ) : intermediateModules && intermediateModules.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {intermediateModules.map(renderModuleCard)}
              </div>
            ) : (
              <Card>
                <CardContent className="py-8 text-center text-muted-foreground">
                  Nenhum módulo intermediário disponível no momento
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
