import { HeartHandshake, Users, BookOpen, UserRound, Settings, LogOut, Home, Activity } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const location = useLocation();

  return (
    <>
      <header className="bg-white shadow-lg hidden md:block">
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
                to="/feed" 
                className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-all hover:scale-105"
              >
                <Activity className="h-5 w-5" />
                <span>Feed</span>
              </Link>
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
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-all hover:scale-105">
                  <UserRound className="h-5 w-5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center space-x-2">
                      <UserRound className="h-4 w-4" />
                      <span>Perfil</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings" className="flex items-center space-x-2">
                      <Settings className="h-4 w-4" />
                      <span>Configurações</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center space-x-2 text-red-600">
                    <LogOut className="h-4 w-4" />
                    <span>Sair</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe">
        <div className="flex justify-around items-center h-16">
          <Link 
            to="/" 
            className={`flex flex-col items-center space-y-1 ${
              location.pathname === "/" ? "text-primary" : "text-gray-600"
            }`}
          >
            <Home className="h-6 w-6" />
            <span className="text-xs">Home</span>
          </Link>
          
          <Link 
            to="/feed" 
            className={`flex flex-col items-center space-y-1 ${
              location.pathname === "/feed" ? "text-primary" : "text-gray-600"
            }`}
          >
            <Activity className="h-6 w-6" />
            <span className="text-xs">Feed</span>
          </Link>
          
          <Link 
            to="/grupos" 
            className={`flex flex-col items-center space-y-1 ${
              location.pathname === "/grupos" ? "text-primary" : "text-gray-600"
            }`}
          >
            <Users className="h-6 w-6" />
            <span className="text-xs">Grupos</span>
          </Link>
          
          <Link 
            to="/profile" 
            className={`flex flex-col items-center space-y-1 ${
              location.pathname === "/profile" ? "text-primary" : "text-gray-600"
            }`}
          >
            <UserRound className="h-6 w-6" />
            <span className="text-xs">Perfil</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;