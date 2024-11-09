import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PostCard from "@/components/PostCard";
import Header from "@/components/Header";

const Profile = () => {
  // Dados mockados para exemplo
  const user = {
    name: "João Silva",
    username: "@joaosilva",
    bio: "Endocrinologista | Hospital São Paulo",
    avatar: "",
    posts: [
      {
        id: 1,
        author: "João Silva",
        date: "Há 2 horas",
        content: "Acabei de publicar um novo artigo sobre diabetes tipo 2. Confira no link abaixo!",
        likes: 15,
        comments: 3,
      },
      {
        id: 2,
        author: "João Silva",
        date: "Há 1 dia",
        content: "Participando do congresso de endocrinologia. Muitas novidades chegando!",
        likes: 24,
        comments: 5,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.avatar} />
              <AvatarFallback className="text-2xl bg-accent text-primary">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-500">{user.username}</p>
              <p className="mt-2 text-gray-700">{user.bio}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {user.posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Profile;