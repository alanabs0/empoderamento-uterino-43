import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { PenSquare } from "lucide-react";

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
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-lg mb-8 text-white">
            <h1 className="text-3xl font-bold mb-4">
              Bem-vinda à Rede Endo
            </h1>
            <p className="text-lg opacity-90 mb-6">
              Um espaço seguro para compartilhar experiências, encontrar apoio e
              conectar-se com outras mulheres que entendem sua jornada.
            </p>
            <Button
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <PenSquare className="mr-2 h-4 w-4" />
              Compartilhe sua história
            </Button>
          </div>

          <div className="space-y-6">
            {SAMPLE_POSTS.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;