import { HeartHandshake, Users, BookOpen, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <HeartHandshake className="h-8 w-8 text-primary animate-pulse" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Rede Endo
            </span>
          </Link>
          
          <nav className="flex items-center space-x-8">
            <Link 
              to="/grupos" 
              className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-all hover:scale-105"
            >
              <Users className="h-5 w-5" />
              <span>Grupos</span>
            </Link>
            <Link 
              to="/recursos" 
              className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-all hover:scale-105"
            >
              <BookOpen className="h-5 w-5" />
              <span>Recursos</span>
            </Link>
            <Link 
              to="/login" 
              className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-all hover:scale-105"
            >
              <UserRound className="h-5 w-5" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;