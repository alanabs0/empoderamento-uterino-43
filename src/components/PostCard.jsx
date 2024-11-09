import { Heart, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copiado para a área de transferência!");
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 mb-4">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
          <span className="text-primary font-medium">{post.author[0]}</span>
        </div>
        <div className="ml-3">
          <h3 className="font-semibold text-gray-900">{post.author}</h3>
          <p className="text-sm text-gray-500">{post.date}</p>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>
      
      <div className="flex items-center space-x-6 text-gray-500">
        <button
          onClick={handleLike}
          className={`flex items-center space-x-1 hover:text-primary transition-all hover:scale-105 ${
            isLiked ? "text-primary" : ""
          }`}
        >
          <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
          <span>{likes}</span>
        </button>
        
        <button className="flex items-center space-x-1 hover:text-primary transition-all hover:scale-105">
          <MessageCircle className="h-5 w-5" />
          <span>{post.comments}</span>
        </button>
        
        <button
          onClick={handleShare}
          className="flex items-center space-x-1 hover:text-primary transition-all hover:scale-105"
        >
          <Share2 className="h-5 w-5" />
          <span>Compartilhar</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;