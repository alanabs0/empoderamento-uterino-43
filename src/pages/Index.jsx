import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserPlus, HeartHandshake, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

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
    author: "Ana Oliveira",
    date: "Há 5 horas",
    content: "Descobri que exercícios leves de yoga têm me ajudado muito com as dores. Alguém mais pratica yoga? Quais exercícios vocês recomendam?",
    likes: 18,
    comments: 8,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary p-12 rounded-lg text-white">
            <h1 className="text-4xl font-bold mb-6">
              Bem-vinda à Rede Endo
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Um espaço seguro para compartilhar experiências, encontrar apoio e
              conectar-se com outras mulheres que entendem sua jornada.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100"
                size="lg"
              >
                <UserPlus className="mr-2 h-5 w-5" />
                Criar Conta
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
                size="lg"
              >
                <HeartHandshake className="mr-2 h-5 w-5" />
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Grupos de Apoio */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Grupos de Apoio</h2>
              <Link to="/grupos" className="text-primary hover:text-primary-dark">
                Ver todos
              </Link>
            </div>
            <div className="space-y-4">
              {SAMPLE_GROUPS.map((group) => (
                <Card key={group.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      {group.name}
                    </CardTitle>
                    <CardDescription>
                      {group.members} membros
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{group.description}</p>
                    <Button variant="outline" className="mt-4">
                      Participar
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Feed de Mensagens */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Mensagens Recentes</h2>
              <Button variant="ghost" className="text-primary hover:text-primary-dark">
                <BookOpen className="h-5 w-5" />
              </Button>
            </div>
            <div className="space-y-6">
              {SAMPLE_POSTS.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;