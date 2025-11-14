import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { Loader2, ArrowLeft, Mic, Play, StopCircle, CheckCircle2, AlertCircle } from "lucide-react";
import { useLocation, useRoute } from "wouter";
import { useState, useRef } from "react";

export default function Lesson() {
  const [, params] = useRoute("/lesson/:id");
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const lessonId = params?.id ? parseInt(params.id) : null;

  // Estado para gravação de áudio
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  // Fetch dados da lição
  const { data: lesson, isLoading: lessonLoading } = trpc.course.getLessonById.useQuery(lessonId || 0, {
    enabled: !!lessonId,
  });

  const { data: exercises, isLoading: exercisesLoading } = trpc.course.getExercisesByLesson.useQuery(lessonId || 0, {
    enabled: !!lessonId,
  });

  // Função para iniciar gravação
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        chunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        setAudioBlob(blob);
        setAudioUrl(URL.createObjectURL(blob));
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Erro ao acessar microfone:", error);
      alert("Não foi possível acessar o microfone. Verifique as permissões.");
    }
  };

  // Função para parar gravação
  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  if (lessonLoading || exercisesLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="animate-spin w-8 h-8" />
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Lição não encontrada</CardTitle>
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
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>

          <h1 className="text-4xl font-bold">{lesson.title}</h1>
          <p className="text-muted-foreground mt-2">{lesson.description}</p>
        </div>

        {/* Conteúdo da Lição */}
        {lesson.content && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Conteúdo da Lição</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                {typeof lesson.content === 'string' ? (
                  <p>{lesson.content}</p>
                ) : (
                  <p>Conteúdo da lição</p>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Exercícios */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Exercícios</h2>

          {exercises && exercises.length > 0 ? (
            <div className="space-y-6">
              {exercises.map((exercise: any, index: number) => (
                <Card key={exercise.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">
                          Exercício {index + 1}: {exercise.title}
                        </CardTitle>
                        <CardDescription className="mt-2">{exercise.description}</CardDescription>
                      </div>
                      <span className="text-xs bg-secondary px-2 py-1 rounded">
                        {exercise.type === 'pronunciation' ? 'Pronúncia' : 
                         exercise.type === 'listening' ? 'Audição' :
                         exercise.type === 'vocabulary' ? 'Vocabulário' : 'Diálogo'}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Texto de Referência */}
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-semibold mb-2">Texto para Repetir:</p>
                      <p className="text-lg font-mono">{exercise.referenceText}</p>
                    </div>

                    {/* Avatar Video (Placeholder) */}
                    {exercise.avatarVideoUrl && (
                      <div className="bg-black rounded-lg aspect-video flex items-center justify-center">
                        <div className="text-center text-white">
                          <Play className="w-12 h-12 mx-auto mb-2 opacity-50" />
                          <p className="text-sm">Vídeo do Avatar</p>
                          <p className="text-xs text-gray-400 mt-1">(Será exibido aqui)</p>
                        </div>
                      </div>
                    )}

                    {/* Controles de Gravação */}
                    <div className="space-y-4">
                      <div className="flex gap-2">
                        {!isRecording && !audioUrl ? (
                          <Button
                            onClick={startRecording}
                            className="flex-1"
                            variant="default"
                          >
                            <Mic className="w-4 h-4 mr-2" />
                            Começar a Gravar
                          </Button>
                        ) : isRecording ? (
                          <Button
                            onClick={stopRecording}
                            className="flex-1"
                            variant="destructive"
                          >
                            <StopCircle className="w-4 h-4 mr-2" />
                            Parar Gravação
                          </Button>
                        ) : (
                          <>
                            <Button
                              onClick={() => {
                                setAudioUrl(null);
                                setAudioBlob(null);
                              }}
                              variant="outline"
                              className="flex-1"
                            >
                              Gravar Novamente
                            </Button>
                            <Button
                              className="flex-1"
                              variant="default"
                            >
                              <CheckCircle2 className="w-4 h-4 mr-2" />
                              Enviar Resposta
                            </Button>
                          </>
                        )}
                      </div>

                      {/* Reproduzir Áudio Gravado */}
                      {audioUrl && (
                        <div className="bg-muted p-4 rounded-lg">
                          <p className="text-sm font-semibold mb-2">Sua Gravação:</p>
                          <audio
                            src={audioUrl}
                            controls
                            className="w-full"
                          />
                        </div>
                      )}

                      {/* Feedback (Placeholder) */}
                      {audioUrl && (
                        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-blue-900">Aguardando Avaliação</p>
                            <p className="text-sm text-blue-700 mt-1">
                              Sua pronúncia está sendo avaliada pelo avatar. Aguarde o feedback...
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-8 text-center text-muted-foreground">
                Nenhum exercício disponível nesta lição ainda
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
