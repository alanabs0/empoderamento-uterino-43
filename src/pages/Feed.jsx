import { useState } from "react";
import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Users } from "lucide-react";
import { toast } from "sonner";

const SAMPLE_GROUPS = [
  {
    id: 1,
    name: "Gestão da Dor",
    members: 156,
    description: "Compartilhe e aprenda técnicas para lidar com as dores da endometriose.",
  },
  {
    id: 2,
    name: "Bem-Estar e Saúde Mental",
    members: 234,
    description: "Um espaço seguro para cuidar da sua saúde mental e emocional.",
  },
  {
    id: 3,
    name: "Terapias Alternativas",
    members: 189,
    description: "Descubra tratamentos complementares e terapias integrativas.",
  },
];

const SAMPLE_POSTS = [
  {
    id: 1,
    author: "Maria Silva",
    date: "Há 2 horas",
    content: "Depois de anos lutando com dores intensas, finalmente recebi meu diagnóstico. Quero compartilhar minha jornada para ajudar outras mulheres que possam estar passando pelo mesmo.",
    likes: 24,
    comments: 5,
  },
  {
    id: 2,
    author: "Anônima",
    date: "Há 5 horas",
    content: "Descobri que exercícios leves de yoga têm me ajudado muito com as dores. Alguém mais pratica yoga? Quais exercícios vocês recomendam?",
    likes: 18,
    comments: 8,
  },
];

const Feed = () => {
  const [message, setMessage] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      toast.error("Por favor, escreva uma mensagem antes de publicar.");
      return;
    }
    
    toast.success("Mensagem publicada com sucesso!");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feed Principal */}
          <div className="md:col-span-2 space-y-6">
            {/* Composer */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Compartilhe sua história</CardTitle>
                <CardDescription>
                  Suas experiências podem ajudar outras mulheres
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Textarea
                    placeholder="O que você gostaria de compartilhar hoje?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-[120px]"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="anonymous"
                        checked={isAnonymous}
                        onCheckedChange={setIsAnonymous}
                      />
                      <label htmlFor="anonymous" className="text-sm text-gray-600">
                        Publicar anonimamente
                      </label>
                    </div>
                    <Button type="submit">Publicar</Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Lista de Posts */}
            <div className="space-y-4">
              {SAMPLE_POSTS.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar - Grupos Sugeridos */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Grupos Sugeridos</h2>
            {SAMPLE_GROUPS.map((group) => (
              <Card key={group.id}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    {group.name}
                  </CardTitle>
                  <CardDescription>
                    {group.members} membros
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{group.description}</p>
                  <Button variant="outline" className="w-full">
                    Participar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Feed;