import { HeartHandshake, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <HeartHandshake className="h-8 w-8 text-primary" />
            <span className="text-xl font-semibold text-primary">Rede Endo</span>
          </Link>
          
          <nav className="flex items-center space-x-8">
            <Link to="/grupos" className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors">
              <Users className="h-5 w-5" />
              <span>Grupos</span>
            </Link>
            <Link to="/recursos" className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors">
              <BookOpen className="h-5 w-5" />
              <span>Recursos</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;