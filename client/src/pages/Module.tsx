import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { trpc } from "@/lib/trpc";
import { Loader2, ArrowLeft, BookOpen, CheckCircle2 } from "lucide-react";
import { useLocation, useRoute } from "wouter";

export default function Module() {
  const [, params] = useRoute("/module/:id");
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const moduleId = params?.id ? parseInt(params.id) : null;

  // Fetch dados do módulo
  const { data: module, isLoading: moduleLoading } = trpc.course.getModuleById.useQuery(moduleId || 0, {
    enabled: !!moduleId,
  });

  const { data: lessons, isLoading: lessonsLoading } = trpc.course.getLessonsByModule.useQuery(moduleId || 0, {
    enabled: !!moduleId,
  });

  if (moduleLoading || lessonsLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="animate-spin w-8 h-8" />
      </div>
    );
  }

  if (!module) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Módulo não encontrado</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={() => setLocation("/dashboard")} className="w-full">
              Voltar ao Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        {/* Header com botão voltar */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => setLocation("/dashboard")}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>

          <h1 className="text-4xl font-bold">
            {module.moduleNumber}. {module.title}
          </h1>
          <p className="text-muted-foreground mt-2">{module.description}</p>

          {/* Informações do módulo */}
          <Card className="mt-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Nível: {module.level === 'basic' ? 'Básico' : 'Intermediário'}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Lições */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Lições</h2>

          {lessons && lessons.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lessons.map((lesson: any) => (
                <Card
                  key={lesson.id}
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setLocation(`/lesson/${lesson.id}`)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{lesson.title}</CardTitle>
                        <CardDescription className="mt-2">{lesson.description}</CardDescription>
                      </div>
                      <CheckCircle2 className="w-6 h-6 text-gray-300 flex-shrink-0 ml-2" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Começar Lição
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-8 text-center text-muted-foreground">
                Nenhuma lição disponível neste módulo ainda
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
